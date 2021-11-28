// External Dependencies
import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';
// Global Variables
export const collections: {
  games?: mongoDB.Collection;
  movies?: mongoDB.Collection;
} = {};

// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGODB_URI ?? ''
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.MONGODB_DB);

  const moviesCollection: mongoDB.Collection = db.collection(
    process.env.MOVIES_COLLECTION_NAME ?? ''
  );

  collections.movies = moviesCollection;

  // eslint-disable-next-line no-console
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${moviesCollection.collectionName}`
  );
}
