// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppDataSource } from './data-source'; 

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       useFactory: async () => AppDataSource.options,
//     }),
//   ],
//   exports: [TypeOrmModule],
// })
// export class DatabaseModule {
//   constructor() {
//     AppDataSource.initialize().then(() => {
//       console.log('DB Connected Successfully!');
//     }).catch((error) => console.log('Error during Data Source initialization:', error));
//   }
// }





import { Module } from '@nestjs/common';
import { Connection, getConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(
          await getConnectionOptions(
            process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
          ),
        ),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) console.log('DB Connected Successfully!');
  }
}

// // const db = require('../../ormconfig.json');
// // @Module({
// //   imports: [
// //     TypeOrmModule.forRoot(db)],
// //   exports: [TypeOrmModule],
// // })
// // export class DatabaseModule {
// //   constructor(connection: Connection) {
// //     if (connection.isConnected) console.log('DB Connected Successfully!');
// //   }
// // }