import * as express from 'express';
import * as http from 'http';
import { appRoutes } from './server/appRoutes';
import { appSettings } from './server/appSettings';
import { appWs } from './server/appWs';

const PORT = process.env.PORT || 3000;

// initialize express app
const app = express();

// initialize a simple http server
const server = http.createServer(app);

appSettings(app);
appRoutes(app);
appWs(server);

// start server
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
