import { neighbours } from './boardGenerator';
import { IBoard } from '../interfaces/board.interface';
import { ICell } from '../interfaces/cell.interface';

export function updateBoardCell(board: IBoard, x: number, y: number, updateData: Partial<ICell>) {
	const newBoard = [ ...board ];
	newBoard[x] = [ ...newBoard[x] ];
	newBoard[x][y] = {
		...newBoard[x][y],
		...updateData
	};

	return newBoard;
}

export function revealCell(board: IBoard, x: number, y: number) {
	let newBoard = updateBoardCell(board, x, y, { isRevealed: true });
	if (board[x][y].hint === 0) {
		neighbours.forEach(([ deltaX, deltaY ]) => {
			const neighbourX = x + deltaX;
			const neighbourY = y + deltaY;

			if (neighbourX < 0 || neighbourY < 0 || neighbourX > board.length - 1 || neighbourY > board[0].length - 1) {
				return;
			}

			if (!board[neighbourX][neighbourY].isRevealed) {
				newBoard = revealCell(newBoard, neighbourX, neighbourY);
			}
		});
	}
	return newBoard;
}
