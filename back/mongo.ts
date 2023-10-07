import { MongoClient, ServerApiVersion } from 'mongodb';
require('dotenv').config();

const uri = process.env.MONGODB_URL || '';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;
