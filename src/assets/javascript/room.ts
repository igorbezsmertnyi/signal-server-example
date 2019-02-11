const room = () => {
  const channelId = window.location.pathname.replace('/', '');
  const ws = new WebSocket(`ws://localhost:3000/${channelId}`);

  ws.onmessage = (e) => console.log(e);

  setTimeout(() => {
    ws.send('Hello World');
  }, 500);
};

window.addEventListener('DOMContentLoaded', room);
