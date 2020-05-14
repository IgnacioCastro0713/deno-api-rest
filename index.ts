import app from "./app.ts";
import { APP_PORT } from './config/enviroments.ts';

async function start() {
    await app.start({ port: APP_PORT});
}

start();
console.log(`run server on port: ${APP_PORT}`);

// start
// deno run --allow-write --allow-read --allow-plugin --allow-net index.ts

// reload puglins
// deno run --reload --allow-write --allow-read --allow-plugin --allow-net index.ts
