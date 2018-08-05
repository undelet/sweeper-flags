import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { ICell } from '../interfaces/cell.interface';

export interface ICellProps extends ICell {
  onPress: () => void;
}

export const Cell = ({
  onPress,
  isBomb,
  isRevealed,
  hint,
}: ICellProps) => {
  let text: string | number = '?';
  if (isRevealed) {
    if (isBomb) {
      text = 'O';
    } else {
      text = hint;
    }
  }

  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <Text>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
