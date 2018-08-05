import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Cell } from './Cell';
import { IBoard } from '../interfaces/board.interface';

export interface IBoardProps {
  onFieldPress: (x: number, y: number) => void;
  board: IBoard;
}

export const Board = ({
  onFieldPress,
  board,
}: IBoardProps) => (
  <View>
    {
      board.map((row, x) => (
        <View key={x} style={styles.row}>
          { row.map((element, y) => <Cell key={y} {...element} onPress={() => onFieldPress(x, y)} /> )}
        </View>
      ))
    }
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
