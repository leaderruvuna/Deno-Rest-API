import { MongoClient } from  "https://deno.land/x/mongo@v0.9.1/mod.ts";

const client = new MongoClient();

client.connectWithUri("mongodb://127.0.0.1:27017");

const db = client.database("carsdb");
const cars = db.collection("cars");

export default cars;

