import { Server } from 'http';
import * as WebSocket from 'ws';

export const websocket = (server: Server) => {
  const channels: any = {};

  const createRoom = (req: any, socket: any, head: any) => {
    const channelId = req.url.replace('/', '');
    let wss: WebSocket.Server;

    if (channels[channelId]) {
      wss = channels[channelId];
    } else {
      wss = new WebSocket.Server({ noServer: true });

      wss.on('connection', (ws: WebSocket) => {
        ws.on('message', (message: string) => {
          wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(message);
              console.log('received: %s', message);
            }
          });
        });

        ws.on('close', () => {
          if (wss.clients.size === 0) {
            delete channels[channelId];
          }
        });
      });

      channels[channelId] = wss;
    }

    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws, req);
    });
  };

  server.on('upgrade', createRoom);
};
