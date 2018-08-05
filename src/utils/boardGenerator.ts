import { IBoard } from '../interfaces/board.interface';

export const generateBoard = (x: number, y: number, bombsCount: number): IBoard => {
	const board: IBoard = Array(x)
		.fill([])
		.map(() => Array(y).fill({}).map(() => ({ isBomb: false, isRevealed: false, hint: 0 })));

	let bombsLeft = bombsCount;

	while (bombsLeft > 0) {
		let candidate = {
			x: Math.floor(Math.random() * x),
			y: Math.floor(Math.random() * y)
		};

		if (!board[candidate.x][candidate.y].isBomb) {
			board[candidate.x][candidate.y].isBomb = true;
			bombsLeft = bombsLeft - 1;
		}
	}

	return populateHints(board);
};

export const neighbours = [ [ -1, -1 ], [ -1, 0 ], [ -1, 1 ], [ 0, -1 ], [ 0, 1 ], [ 1, -1 ], [ 1, 0 ], [ 1, 1 ] ];

function populateHints(board: IBoard): IBoard {
	const rows = board.length;
	const columns = board[0].length;

	board.forEach((row, x) => {
		row.forEach(({ isBomb }, y) => {
			if (!isBomb) {
				return;
			}

			neighbours.forEach(([ deltaX, deltaY ]) => {
				const neighbourX = x + deltaX;
				const neighbourY = y + deltaY;

				if (neighbourX < 0 || neighbourY < 0 || neighbourX > rows - 1 || neighbourY > columns - 1) {
					return;
				}

				board[neighbourX][neighbourY].hint++;
			});
		});
	});

	return board;
}
