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

  async getUser(): Promise<User[]> {
    const user = await this.userModel.find();

    console.log(user);

    return user;
  }

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);

    await newUser.save();

    return newUser;
  }
}
