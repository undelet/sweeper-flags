import { IBoard } from '../interfaces/board.interface';

export const generateBoard = (x: number, y: number, bombsCount: number): IBoard => {
	const board: IBoard = Array(x)
		.fill([])
		.map(() => Array(y).fill({}).map(() => ({ isBomb: false, isRevealed: false, hint: 0 })));

	let bombsLeft = bombsCount;

	let breaker = 10;

	while (bombsLeft > 0) {
		let candidate = {
			x: Math.floor(Math.random() * x),
			y: Math.floor(Math.random() * y)
		};

		if (!board[candidate.x][candidate.y].isBomb) {
			board[candidate.x][candidate.y].isBomb = true;
			bombsLeft = bombsLeft - 1;
		}

		breaker = breaker - 1;
		if (breaker < 0) break;
	}

	return board;
};
