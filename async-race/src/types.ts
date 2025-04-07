export interface Car {
  name: string;
  color: string;
}

export interface carOptions {
  carCount: string | null;
  pageNumber: number | string;
  carList: Car[];
}

export interface Winner {
  wins: number;
  time: number;
}
