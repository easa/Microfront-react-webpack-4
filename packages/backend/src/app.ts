import http from 'http';
import express from 'express';
import WebSocket from 'ws';
import cors from 'cors';
import { orderBook, order, errorHandling } from './routers';
import socketApp from './webSocket';
import { logger } from './logger';

const port = process.env.PORT as string;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ ok: 'ok' }));

app.use(orderBook);
app.use(order);
app.use(errorHandling);

// websocket
const wss = new WebSocket.Server({ server });
wss.on('connection', socketApp);

server.listen(port, () => {
  logger(`App is listening at http://localhost:${port}`);
  // require('child_process').exec(`start http://localhost:${port}`)
});
