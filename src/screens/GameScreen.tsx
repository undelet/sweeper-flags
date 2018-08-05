import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, PanResponder, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo';

import { generateBoard } from '../utils/boardGenerator';
import { Board } from '../components/Board';
import { IBoard } from '../interfaces/board.interface';
import { revealCell } from '../utils/updateBoardCell';
import { colors } from '../theme/colors';

interface IGameScreenState {
	board: IBoard;
}

let Window = Dimensions.get('window');

export class GameScreen extends React.Component<{}, IGameScreenState> {
	state = {
		board: generateBoard(8, 8, 15),
		pan: new Animated.ValueXY()
	};

	panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: Animated.event([
			null,
			{
				dx: this.state.pan.x,
				dy: this.state.pan.y
			}
		]),
		onPanResponderRelease: (e, gesture) => {}
	});

	render() {
		return (
			<View style={styles.screen}>
				<Animated.View
					style={[ this.state.pan.getLayout(), styles.boardContainer ]}
					{...this.panResponder.panHandlers}
				>
					<Board onFieldPress={this.onFieldPress} board={this.state.board} />
				</Animated.View>
				<LinearGradient colors={statusGradColors}>
					<View style={{ height: 150 }}>
						<TouchableOpacity onPress={() => Alert.alert('NEW GAME PRESSED')}>
							<Text
								style={{
									alignSelf: 'flex-end',
									fontSize: 30,
									color: colors.blue,
									backgroundColor: colors.beige
								}}
							>
								START
							</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		);
	}

	private onFieldPress = (x: number, y: number) => {
		this.setState(({ board }) => ({
			board: revealCell(board, x, y)
		}));
	};
}

const statusGradColors = [ colors.tealTransparent, colors.teal ];

const styles = StyleSheet.create({
	screen: { flex: 1, backgroundColor: colors.teal, justifyContent: 'flex-end' },
	boardContainer: { position: 'absolute' }
});
