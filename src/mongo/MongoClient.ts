import mongoose from 'mongoose';

class MongoClient {
  constructor() {}

  connect(dbConnectionString: string) {
    console.log('dbConnectionString', dbConnectionString);
    mongoose.connect(dbConnectionString);

    mongoose.connection
      .once('open', () => {
        console.log('Connected to MongoDB');
      })
      .on('error', (error) => {
        console.warn('Warning', error);
      });
  }
}

const mongoClient = new MongoClient();

export default mongoClient;
