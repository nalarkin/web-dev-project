// External Dependencies
import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';
// Global Variables
export const collections: {
  products?: mongoDB.Collection;
  client?: mongoDB.MongoClient;
} = {};

// Initialize Connection
export async function connectToDatabase() {
  if (collections.products !== undefined && collections.client !== undefined) {
    return { db: collections.products, client: collections.client };
  }
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGODB_URI ?? ''
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const productsCollection: mongoDB.Collection = db.collection(
    process.env.PRODUCTS_COLLECTION_NAME ?? ''
  );

  collections.products = productsCollection;

  // eslint-disable-next-line no-console
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${productsCollection.collectionName}`
  );
  return { db: collections.products, client };
}
