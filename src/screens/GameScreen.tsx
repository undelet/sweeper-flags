import React from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Board } from '../components/Board';
import { colors } from '../theme/colors';
import { IGameServiceInjectedProps, withGameService } from '../service-components/game.service-component';

interface IGameScreenState {
	pan: Animated.ValueXY;
}

class AbstractGameScreen extends React.Component<IGameServiceInjectedProps, IGameScreenState> {
	state = {
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
		onPanResponderRelease: (e, gesture) => { }
	});

	render() {
		const { onFieldPress, board, onStart } = this.props;

		return (
			<View style={styles.screen}>
				<Animated.View
					style={[this.state.pan.getLayout(), styles.boardContainer]}
					{...this.panResponder.panHandlers}
				>
					<Board onFieldPress={onFieldPress} board={board} />
				</Animated.View>
				<LinearGradient colors={statusGradColors}>
					<View style={{ height: 150 }}>
						<TouchableOpacity onPress={onStart}>
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
}

const statusGradColors = [colors.tealTransparent, colors.teal];

const styles = StyleSheet.create({
	screen: { flex: 1, backgroundColor: colors.teal, justifyContent: 'flex-end' },
	boardContainer: { position: 'absolute' }
});

export const GameScreen = withGameService(AbstractGameScreen);
