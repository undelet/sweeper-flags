import { IBoard } from '../interfaces/board.interface';
import { ICell } from '../interfaces/cell.interface';

export function updateBoardCell(board: IBoard, x: number, y: number, updateData: Partial<ICell>) {
  const newBoard = [...board];
  newBoard[x] = [...newBoard[x]];
  newBoard[x][y] = {
    ...newBoard[x][y],
    ...updateData,
  };

  return newBoard;
}
