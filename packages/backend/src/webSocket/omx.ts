import WebSocket from 'ws';
import { logger } from '../logger';

const omxWebsocket = (ws: WebSocket) => {
  try {
    const subscribe = () => {
      const interval = setInterval(() => {
        const lastPrice = Math.random().toFixed(5);
        ws.send(JSON.stringify({ omx: lastPrice }));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    };
    const unsubscribe = subscribe();
    ws.on('close', () => {
      try {
        unsubscribe();
      } catch (er) { logger('websocket omx unsubscribe', er); }
      ws.send('closed!');
    });
  } catch (websocketE) {
    logger({ websocketE });
  }
};

export default omxWebsocket;
