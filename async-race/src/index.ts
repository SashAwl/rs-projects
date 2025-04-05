import {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
  startStopCarEngine,
  StateEngine,
  switchCarMode,
  getWinners,
  SortOption,
  SortOrder,
  getWinner,
  createWinner,
  updateWinner,
} from './api/api';

// getCars([
//   { key: '_page', value: '1' },
//   { key: '_limit', value: '4' },
// ]).then((data) => console.log('dfgd', data));

// getCar(3).then((data) => console.log('item', data));
// createCar({ name: 'Audi', color: 'pink' }).then((data) => {
//   console.log('createItem', data);
// });

// updateCar(7, { name: 'Infinity' }).then((data) =>
//   console.log('updated:', data),
// );

// deleteCar(7 ).then((data) => console.log('deleted:', data));

// getCars([
//   { key: '_page', value: '1' },
//   { key: '_limit', value: '10' },
// ]).then((data) => console.log('Result', data));

// startStopCarEngine([
//   { key: 'id', value: 10 },
//   { key: 'status', value: StateEngine.STARTED },
// ]).then((data) => console.log(data));

// switchCarMode([
//   { key: 'id', value: 10 },
//   { key: 'status', value: StateEngine.DRIVE },
// ]).then((data) => console.log(data));

// getWinners([
//   { key: '_page', value: '1' },
//   { key: '_limit', value: '4' },
//   { key: '_sort', value: SortOption.WINS },
//   { key: '_order', value: SortOrder.DESC },
// ]).then((data) => console.log('winners: ', data));

// getWinner(1).then((data) => console.log('winner: ', data));

// createWinner(6, { wins: 2, time: 5 }).then((data) =>
//   console.log('winner-new: ', data),
// );

// updateWinner(12, { wins: 5, time: 8 });
