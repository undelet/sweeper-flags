import { ISocketStartMessage } from '../interfaces/socket-start-message.interface';
import { ISocketProbeMessage } from '../interfaces/socket-probe-message.interface';

export type SocketMessage = ISocketStartMessage | ISocketProbeMessage;
