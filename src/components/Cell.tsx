import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

const Cell = (props: { isBomb: boolean, revealedBy: string, onTouch: () => void }) => (
  <TouchableHighlight onPress={ props.onTouch }>
    <View style={{ padding: 12 }}>
      {
        props.revealedBy === undefined ? <Text>?</Text> : <Text>{ props.isBomb ? 'O' : '-' }</Text>
      }
    </View>
  </TouchableHighlight>
)

export default Cell