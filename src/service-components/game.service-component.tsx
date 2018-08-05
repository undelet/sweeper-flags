import React, { Component, ComponentType } from 'react';
import io from 'socket.io-client'
import { IBoard } from '../interfaces/board.interface';
import { generateBoard } from '../utils/boardGenerator';
import { Subtract } from '../utils/types';
import { revealCell } from '../utils/updateBoardCell';
import { SocketMessageType } from '../enums/socket-message-type.enum';
import { SocketMessage } from '../types/socket-message.type';

export interface IGameServiceInjectedProps {
  board: IBoard;
  onStart: () => void;
  onFieldPress: (x: number, y: number) => void;
}

interface IGameServiceState {
  board: IBoard;
}

export const withGameService = <P extends IGameServiceInjectedProps>(WrappedComponent: ComponentType<P>) =>
  class GameServiceWrapper extends Component<
    Subtract<P, IGameServiceInjectedProps>,
    IGameServiceState
    > {
    private socket: SocketIOClient.Socket;

    public state: IGameServiceState = {
      board: [[]],
    };

    public componentDidMount() {
      this.socket = io('http://ea854587.ngrok.io', {
        transports: [
          'websocket',
        ],
      });

      this.socket.on('message', this.onSocketMessage);
    }

    public componentWillUnmount() {
      this.socket.close();
    }

    public onStart = () => {
      this.socket.emit(
        'message',
        {
          type: SocketMessageType.START,
          payload: generateBoard(8, 8, 15),
        }
      );
    }

    public onFieldPress = (x: number, y: number) => {
      this.socket.emit(
        'message',
        {
          type: SocketMessageType.PROBE,
          payload: {
            x, y,
          },
        },
      );
    }

    public render() {
      const { board } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          board={board}
          onStart={this.onStart}
          onFieldPress={this.onFieldPress}
        />
      );
    }

    private onSocketMessage = (message: SocketMessage): void => {
      switch (message.type) {
        case SocketMessageType.START:
          return this.setState({
            board: message.payload,
          });
        case SocketMessageType.PROBE:
          const { x, y } = message.payload;

          return this.setState(({ board }) => ({
            board: revealCell(board, x, y),
          }));
      }
    }
  }
