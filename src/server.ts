import * as express from 'express';
import * as http from 'http';
import { settings } from './config/settings';
import { routes } from './routes';
import { websocket } from './websocket';

const PORT = process.env.PORT || 3000;

// initialize express app
const app = express();

// initialize a simple http server
const server = http.createServer(app);

settings(app);
routes(app);
websocket(server);

// start server
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
