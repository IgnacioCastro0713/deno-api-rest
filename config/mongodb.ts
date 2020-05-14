import { init, MongoClient } from "https://deno.land/x/mongo@v0.5.2/mod.ts";

// Initialize the plugin
await init();

class DB {
  public client: MongoClient;

  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }

  connect(): void {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }
  
  get getDatabase(): any {
    return this.client.database(this.dbName);
  }
}

const mongodb = new DB("deno-api-rest", "mongodb://localhost:27017");
mongodb.connect();

export default mongodb;