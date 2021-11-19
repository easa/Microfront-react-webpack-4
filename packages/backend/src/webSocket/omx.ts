import WebSocket from 'ws';
import avanza from '../adapters/avanza/avanza';
import { logger } from '../logger';

const orderBookId = '19002'; // OMX

const omxWebsocket = (ws: WebSocket) => {
  try {
    const unsubscribe = avanza.subscribe('quotes', orderBookId, ({ lastPrice }) => {
      ws.send(JSON.stringify({ omx: lastPrice.toFixed(2) }));
    });
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
