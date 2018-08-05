import React from 'react';
import { View, Text } from 'react-native';

import { generateBoard, neighbours } from '../utils/boardGenerator';
import { Board } from '../components/Board';
import { IBoard } from '../interfaces/board.interface';
import { updateBoardCell } from '../utils/updateBoardCell';

interface IGameScreenState {
	board: IBoard;
}

export class GameScreen extends React.Component<{}, IGameScreenState> {
	state = {
		board: generateBoard(8, 8, 16)
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1, backgroundColor: 'red' }}>
					<Text>Opponent</Text>
				</View>
				<View style={{ backgroundColor: 'white' }}>
					<Board onFieldPress={this.onFieldPress} board={this.state.board} />
				</View>
				<View style={{ flex: 1, backgroundColor: 'green' }}>
					<Text>You</Text>
				</View>
			</View>
		);
	}

	private onFieldPress = (x: number, y: number) => {
		this.setState(({ board }) => {
			if (board[x][y].hint === 0) {
				neighbours.forEach(([ deltaX, deltaY ]) => {
					const neighbourX = x + deltaX;
					const neighbourY = y + deltaY;

					if (
						neighbourX < 0 ||
						neighbourY < 0 ||
						neighbourX > board.length - 1 ||
						neighbourY > board[0].length - 1
					) {
						return;
					}

					if (!board[neighbourX][neighbourY].isRevealed) {
						this.onFieldPress(neighbourX, neighbourY);
					}
				});
			}
			return {
				board: updateBoardCell(board, x, y, { isRevealed: true })
			};
		});
	};
}
