import http from 'http';
import express from 'express';
import WebSocket from 'ws';
import cors from 'cors';
import {
  login, strategy, position, orderBook, orderBookLoad,
  order, omx, errorHandling, orderBookSubscribe,
} from './routers';
import socketApp from './webSocket';
import { logger } from './logger';

const port = process.env.PORT as string;

// strategy.register(spread_buy)
// strategy.run? (spread_buy) // router/strategy/run

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for production it should load the html page from the static folder
// that contains the build items from react
// -------------------
// TODO the static router for REACT
app.get('/', (req, res) => res.json({ ok: 'ok' }));
// -------------------
// then the API routes

app.use(strategy);
app.use(login);
app.use(orderBook);
app.use(orderBookLoad);
app.use(orderBookSubscribe);
app.use(position);
app.use(order);
app.use(omx);
app.use(errorHandling);

// websocket
const wss = new WebSocket.Server({ server });
wss.on('connection', socketApp);

server.listen(port, () => {
  logger(`App is listening at http://localhost:${port}`);
  // require('child_process').exec(`start http://localhost:${port}`)
});
