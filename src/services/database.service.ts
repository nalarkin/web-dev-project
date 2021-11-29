// External Dependencies
import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';
// Global Variables
export const collections: {
  products?: mongoDB.Collection;
  users?: mongoDB.Collection;
  secret_products?: mongoDB.Collection;
  client?: mongoDB.MongoClient;
} = {};

// Initialize Connection
export async function connectToDatabase() {
  if (
    collections.products !== undefined &&
    collections.client !== undefined &&
    collections.users !== undefined &&
    collections.secret_products !== undefined
  ) {
    return {
      products: collections.products,
      client: collections.client,
      users: collections.users,
      secrets: collections.secret_products,
    };
  }
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGODB_URI ?? ''
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  collections.products = db.collection(
    process.env.PRODUCTS_COLLECTION_NAME ?? ''
  );
  console.log(`Connected collection: ${collections.products.collectionName}`);

  // collections.products = productsCollection;
  collections.users = db.collection(process.env.USERS_COLLECTION_NAME ?? '');
  console.log(`Connected collection: ${collections.users.collectionName}`);

  // collections.users = usersCollection;
  collections.secret_products = db.collection(
    process.env.SECRETS_COLLECTION_NAME ?? ''
  );
  console.log(
    `Connected collection: ${collections.secret_products.collectionName}`
  );
  console.log('============================');

  // collections.secrets = secretsCollection;

  // eslint-disable-next-line no-console
  return {
    db: collections.products,
    client,
    users: collections.users,
    secrets: collections.secret_products,
  };
}
