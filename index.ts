import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
// Initialize the plugin
await init();
const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");
//@ts-ignore
const db = getClient().database("test");
const users = db.collection("users");
// insert
const insertId = await users.insertOne({
  username: "user1",
  password: "pass1"
});

// start
// deno run --allow-write --allow-read --allow-plugin --allow-net index.ts

// reload puglins
// deno run --reload --allow-write --allow-read --allow-plugin --allow-net index.ts
