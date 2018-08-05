import React from 'react'
import { View, Text } from 'react-native'
import Board from '../components/Board';

const noBombNoReveal = { isBomb: false, revealedBy: undefined as string }
const noBombReveal = { isBomb: false, revealedBy: 'p1' }
const bombNoReveal = { isBomb: true, revealedBy: undefined as string }
const bombReveal = { isBomb: true, revealedBy: 'p1' }

export class GameScreen extends React.Component<{}, {}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}><Text>Opponent</Text></View>
        <View style={{ backgroundColor: 'white' }}>
          <Board
            onFieldPress={console.log}
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