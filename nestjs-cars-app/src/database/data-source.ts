// import 'reflect-metadata';
// import { DataSource, DataSourceOptions } from 'typeorm';

// export const commonOptions: DataSourceOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'Snklp2004$',
//   database: 'yourcar',
//   entities: ['dist/**/entities/*{.ts,.js}'],
//   synchronize: true,
//   migrations: ['dist/migrations/*{.ts,.js}'],
// };

// const devDataSourceOptions: DataSourceOptions = {
//   ...commonOptions,
//   name: 'dev',
// };

// const prodDataSourceOptions: DataSourceOptions = {
//   ...commonOptions,
//   name: 'prod',
// };

// // export const AppDataSource = new DataSource(
// //   process.env.NODE_ENV === 'production' ? prodDataSourceOptions : devDataSourceOptions
// // );

// const dataSource = new DataSource(process.env.NODE_ENV === 'production' ? prodDataSourceOptions : devDataSourceOptions);
// export default dataSource

// // AppDataSource.initialize().then(() => {
// //   console.log('Data Source has been initialized!');
// // }).catch((err) => {
// //   console.error('Error during Data Source initialization:', err);
// // });
