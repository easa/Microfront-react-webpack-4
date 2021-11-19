import WebSocket from 'ws';
import omxWebsocket from './omx';
import orderBookWebsocket from './orderBooks';

// per connection / per user
export default (ws: WebSocket) => {
  ws.on('message', (msg: string) => {
    ws.send(JSON.stringify({ ok: 'OK', message: msg.toString() }));
  });
  orderBookWebsocket(ws);
  omxWebsocket(ws);
};
