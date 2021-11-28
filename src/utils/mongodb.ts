// import { MongoClient } from 'mongodb';
// import type {} from 'mongodb';

// const uri = process.env.MONGODB_URI;
// const dbName = process.env.MONGODB_DB;

// let cachedClient: (Promise<MongoClient> & void) | null = null;
// let cachedDb = null;

// if (uri === undefined) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   );
// }

// if (dbName === undefined) {
//   throw new Error(
//     'Please define the MONGODB_DB environment variable inside .env.local'
//   );
// }

// // eslint-disable-next-line import/prefer-default-export
// export async function connectToDatabase() {
//   if (cachedClient && cachedDb) {
//     return { client: cachedClient, db: cachedDb };
//   }

//   const client = await MongoClient.connect(uri ?? '', {
//     // @ts-expect-error
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const db = await client.db(dbName ?? '');

//   cachedClient = client;
//   cachedDb = db;

//   return { client, db };
// }
export {};
