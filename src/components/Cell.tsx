import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { ICell } from '../interfaces/cell.interface';

export interface ICellProps extends ICell {
	onPress: () => void;
}

// 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 💣 🚩 🏳️‍🌈 0️⃣

export const Cell = ({ onPress, isBomb, isRevealed, hint }: ICellProps) => {
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
		padding: 12
	}
});
