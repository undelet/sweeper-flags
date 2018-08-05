import React from 'react'
import { View, Text } from 'react-native'

import { generateBoard } from '../utils/boardGenerator'
import { Board } from '../components/Board';

const noBombNoReveal = { isBomb: false, isRevealed: false }
const noBombReveal = { isBomb: false, isRevealed: true }
const bombNoReveal = { isBomb: true, isRevealed: false }
const bombReveal = { isBomb: true, isRevealed: true }

export class GameScreen extends React.Component<{}, {}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}><Text>Opponent</Text></View>
        <View style={{ backgroundColor: 'white' }}>
          <Board
            onFieldPress={() => console.log(generateBoard(4, 4, 4))}
            board={[
              [ noBombNoReveal, noBombReveal, bombNoReveal, bombReveal ],
              [ noBombNoReveal, noBombReveal, bombNoReveal, bombReveal ],
              [ noBombNoReveal, noBombReveal, bombNoReveal, bombReveal ],
              [ noBombNoReveal, noBombReveal, bombNoReveal, bombReveal ]
            ]}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: 'green' }}><Text>You</Text></View>
      </View>
    )
  }
}
