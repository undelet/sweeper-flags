import * as React from 'react';
import io from 'socket.io-client'
import { GameScreen } from './screens/GameScreen';

export default class App extends React.Component<{}> {
  componentDidMount() {
    console.log('begin')
    const socket = io('http://ea854587.ngrok.io', {
      transports: [
        "websocket"
      ]
    });

    socket.on('connect', () => console.log('hello'));
  }

  render() {
    return (
      <GameScreen/>
    );
  }
}
