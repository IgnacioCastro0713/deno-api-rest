import { init, MongoClient, Database } from "https://deno.land/x/mongo@v0.6.0/mod.ts";

// Initialize the plugin
await init();

class DB {
  private client: MongoClient;
  
  constructor(private dbName: string, private url: string) {
    this.client = {} as MongoClient;
  }

  connect(): void {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }

  get getDatabase(): Database {
    return this.client.database(this.dbName);
  }
}

const mongodb = new DB("deno-api-rest", "mongodb://localhost:27017");
mongodb.connect();

export default mongodb;
