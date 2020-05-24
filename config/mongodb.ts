import {mongo} from "../dependencies.ts";

const {MongoClient} = mongo;
const client = new MongoClient();

client.connectWithUri("mongodb://localhost:27017");
const mongodb = client.database("deno-api-rest");

export default mongodb;