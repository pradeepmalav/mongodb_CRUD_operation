
import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const database = "test";

export async function dbConnect() {
    let result = await client.connect();
    let db = await result.db(database);
    return db.collection('products');

}