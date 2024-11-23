import { Injectable } from '@nestjs/common';
// import mongoClient from '../mongo/MongoClient';
import { User } from '../schema/User';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getUser(): Promise<any> {
    const users = await this.userModel.find({ name: 'Ned Stark' });

    console.log(users);

    return users;
  }
}
