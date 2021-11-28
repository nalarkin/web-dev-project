// External Dependencies
import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';
// Global Variables
export const collections: {
  products?: mongoDB.Collection;
  users?: mongoDB.Collection;
  client?: mongoDB.MongoClient;
} = {};

// Initialize Connection
export async function connectToDatabase() {
  if (
    collections.products !== undefined &&
    collections.client !== undefined &&
    collections.users
  ) {
    return {
      db: collections.products,
      client: collections.client,
      users: collections.users,
    };
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
  const usersCollection: mongoDB.Collection = db.collection(
    process.env.USERS_COLLECTION_NAME ?? ''
  );
  collections.users = usersCollection;

  // eslint-disable-next-line no-console
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${productsCollection.collectionName}`
  );
  return { db: collections.products, client, users: collections.users };
}
