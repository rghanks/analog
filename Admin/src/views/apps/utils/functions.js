import io from "socket.io-client";

export function createSocketClient(access_token) {
  const socket = io("wss://socket.bitflash.io", {
    auth: {
      token: access_token, //kujgwvfq-a-ghosttown-z-1fhhup0p6
    },
  });
  return socket;
}
