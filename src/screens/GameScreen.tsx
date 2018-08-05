import React from 'react'
import { View, Text } from 'react-native'

import { generateBoard } from '../utils/boardGenerator'
import { Board } from '../components/Board';
import { IBoard } from '../interfaces/board.interface';
import { updateBoardCell } from '../utils/updateBoardCell';

interface IGameScreenState {
  board: IBoard;
}

export class GameScreen extends React.Component<{}, IGameScreenState> {
  state = {
    board: generateBoard(4, 4, 4),
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}><Text>Opponent</Text></View>
        <View style={{ backgroundColor: 'white' }}>
          <Board
            onFieldPress={this.onFieldPress}
            board={this.state.board}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: 'green' }}><Text>You</Text></View>
      </View>
    )
  }

  private onFieldPress = (x: number, y: number) => {
    this.setState(({ board }) => ({
      board: updateBoardCell(board, x, y, { isRevealed: true }),
    }));
  }
}
