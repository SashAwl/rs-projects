const socket = new WebSocket('ws://localhost:4000');
import type { ServerResponse } from './type-server-response';
import type { ServerRequest } from './type-server-request';

type Listener = (data: ServerResponse) => void;
const listeners: Listener[] = [];

socket.addEventListener('message', (event) => {
  const data: ServerResponse = JSON.parse(event.data);
  listeners.forEach((listener) => listener(data));
});
export default socket;

export function subscribeToMessages(listener: Listener): void {
  listeners.push(listener);
}

export function sendMessage(message: ServerRequest): void {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  } else {
    socket.addEventListener(
      'open',
      () => {
        socket.send(JSON.stringify(message));
      },
      { once: true },
    );
  }
}
