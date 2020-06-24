import app from "./app.ts";
import { PORT } from './config/enviroments.ts';

await app.listen({ port: PORT});

console.log(`Listening on port ${PORT} ...`);

// start
// deno run --allow-env --allow-write --allow-read --allow-plugin --allow-net --unstable index.ts

// reload puglins
// deno run --allow-env --reload --allow-write --allow-read --allow-plugin --allow-net --unstable index.ts
