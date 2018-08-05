import { SocketMessageType } from '../enums/socket-message-type.enum';
import { IBoard } from './board.interface';

export interface ISocketStartMessage {
  type: SocketMessageType.START;
  payload: IBoard;
}
