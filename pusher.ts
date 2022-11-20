import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.APP_ID!,
  key: process.env.KEY!,
  secret: process.env.SECRET!,
  cluster: process.env.CLUSTER!,
  useTLS: true,
});

export const clientPusher = new ClientPusher("4b9f45c76c7b37236b39", {
  cluster: process.env.CLUSTER!,
  forceTLS: true,
});
