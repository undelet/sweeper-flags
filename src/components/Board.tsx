import React from 'react'
import { View } from 'react-native'
import Cell from './Cell';

const Board = (props: {
  onFieldPress: (x: number, y: number) => void
  board: { isBomb: boolean, revealedBy: string }[][]
}) => (
  <View>
    {
      props.board.map((row, y) => (
        <View style={{ flexDirection: 'row' }}>
          { row.map((element, x) => <Cell {...element} onTouch={() => props.onFieldPress(x, y)} /> )}
        </View>
      ))
    }
  </View>
)

export default Board