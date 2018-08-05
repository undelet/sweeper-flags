import { SocketMessageType } from '../enums/socket-message-type.enum';

export interface ISocketProbeMessage {
  type: SocketMessageType.PROBE;
  payload: {
    x: number;
    y: number;
  }
}
