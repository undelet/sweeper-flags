import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Cell } from './Cell';
import { IBoard } from '../interfaces/board.interface';
import { colors } from '../theme/colors';

export interface IBoardProps {
	onFieldPress: (x: number, y: number) => void;
	board: IBoard;
}

export const Board = ({ onFieldPress, board }: IBoardProps) => (
	<View style={styles.board}>
		{board.map((row, x) => (
			<View key={x} style={styles.row}>
				{row.map((element, y) => <Cell key={y} {...element} onPress={() => onFieldPress(x, y)} />)}
			</View>
		))}
	</View>
);

const styles = StyleSheet.create({
	board: {
		padding: 8,
		backgroundColor: colors.beige,
		shadowColor: '#777',
		shadowRadius: 9,
		shadowOpacity: 0.3,
		shadowOffset: { width: 5, height: 7 },
		borderWidth: 0,
		borderRadius: 8,
		borderColor: '#fff',
		overflow: 'hidden',
		elevation: 5
	},
	row: {
		flexDirection: 'row'
	}
});
