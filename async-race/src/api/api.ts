interface Query {
  key: string;
  value: string | number;
}

interface Car {
  name: string;
  color: string;
}

interface Winner {
  wins: number;
  time: number;
}

export enum StateEngine {
  STARTED = 'started',
  STOPPED = 'stopped',
  DRIVE = 'drive',
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum SortOption {
  ID = 'id',
  WINS = 'wins',
  TIME = 'time',
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

const BASE_URL = 'http://127.0.0.1:3000';

enum Path {
  GARAGE = '/garage',
  ENGINE = '/engine',
  WINNERS = '/winners',
}

function generateQueryString(queryParams: Query[] = []) {
  return queryParams.length
    ? `?${queryParams.map((query) => `${query.key}=${query.value}`).join('&')}`
    : '';
}

export async function getCars(queryParams: Query[] = []) {
  const response = await fetch(
    `${BASE_URL}${Path.GARAGE}${generateQueryString(queryParams)}`,
  );
  const data = await response.json();

  const countItem = response.headers.get('X-Total-Count');
  return { data, countItem };
}

export async function getCar(id: number) {
  const response = await fetch(`${BASE_URL}${Path.GARAGE}/${id}`);
  return await response.json();
}

export async function createCar(car: Car) {
  const response = await fetch(`${BASE_URL}${Path.GARAGE}`, {
    method: HttpMethod.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });

  return await response.json();
}

export async function updateCar(id: number, details: Car) {
  const response = await fetch(`${BASE_URL}${Path.GARAGE}/${id}`, {
    method: HttpMethod.PUT,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(details),
  });

  return await response.json();
}

export async function deleteCar(id: number) {
  const response = await fetch(`${BASE_URL}${Path.GARAGE}/${id}`, {
    method: HttpMethod.DELETE,
  });

  return response.ok;
}

export async function startStopCarEngine(queryParams: Query[] = []) {
  const response = await fetch(
    `${BASE_URL}${Path.ENGINE}${generateQueryString(queryParams)}`,
    {
      method: HttpMethod.PATCH,
    },
  );

  return await response.json();
}

export async function switchCarMode(queryParams: Query[] = []) {
  const response = await fetch(
    `${BASE_URL}${Path.ENGINE}${generateQueryString(queryParams)}`,
    {
      method: HttpMethod.PATCH,
    },
  );

  return await response.json();
}

export async function getWinners(queryParams: Query[] = []) {
  const response = await fetch(
    `${BASE_URL}${Path.WINNERS}${generateQueryString(queryParams)}`,
  );
  const data = await response.json();

  const countItem = response.headers.get('X-Total-Count');
  return { data, countItem };
}

export async function getWinner(id: number) {
  const response = await fetch(`${BASE_URL}${Path.WINNERS}/${id}`);
  return await response.json();
}

export async function createWinner(id: number, winner: Winner) {
  const response = await fetch(`${BASE_URL}${Path.WINNERS}`, {
    method: HttpMethod.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id, ...winner }),
  });

  return await response.json();
}

export async function updateWinner(id: number, winner: Winner) {
  const response = await fetch(`${BASE_URL}${Path.WINNERS}/${id}`, {
    method: HttpMethod.PUT,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(winner),
  });

  return await response.json();
}
