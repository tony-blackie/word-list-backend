import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
      {
        onConnectionCreate: (connection: Connection) => {
          connection.on('connected', () => console.log('connected'));
          connection.on('open', () => console.log('open'));
          connection.on('disconnected', () => console.log('disconnected'));
          connection.on('reconnected', () => console.log('reconnected'));
          connection.on('disconnecting', () => console.log('disconnecting'));

          return connection;
        },
      },
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
