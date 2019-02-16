import { Server } from 'http';
import { getCustomRepository } from 'typeorm';
import * as WebSocket from 'ws';
import { ChannelRepository } from './repository/ChannelRepository';

export const websocket = (server: Server) => {
  const channelRepository = getCustomRepository(ChannelRepository);
  const channels: any = {};

  const createRoom = async (req: any, socket: any, head: any) => {
    const token = await req.url.replace('/', '');
    const channel = await channelRepository.findByToken(token);
    let wss: WebSocket.Server;

    if (!channel) {
      return;
    }

    if (channels[token]) {
      wss = channels[token];
    } else {
      wss = await new WebSocket.Server({ noServer: true });

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
            delete channels[token];
          }
        });
      });

      channels[token] = wss;
    }

    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws, req);
    });
  };

  server.on('upgrade', createRoom);
};
