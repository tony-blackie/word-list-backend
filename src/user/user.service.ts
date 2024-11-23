import { Injectable } from '@nestjs/common';
import mongoClient from '../mongo/MongoClient';
import User from '../mongo/schema/User';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {
    const connectionString = configService.get<string>('CONNECTION_STRING');
    console.log('connectionString', connectionString);
    mongoClient.connect(connectionString);
  }

  async getUser(): Promise<any> {
    const users = await User.find({ name: 'Ned Stark' });

    console.log(users);

    return users;
  }
}
