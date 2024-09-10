// import { Injectable, InternalServerErrorException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { NewCarInput } from './dto/new-car.input';
// import { Car } from './entities/car';

// @Injectable()
// export class CarsService {
//   constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

//   public async getAllCars(): Promise<Car[]> {
//     return await this.carRepository.find({}).catch((err) => {
//       throw new InternalServerErrorException();
//     });
//   }

//   public async addCar(newCarData: NewCarInput): Promise<Car> {
//     const newCar = this.carRepository.create(newCarData);
//     await this.carRepository.save(newCar).catch((err) => {
//       new InternalServerErrorException();
//     });

//     return newCar;
//   }
// }

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car';
import { NewCarInput } from './dto/new-car.input';

@Injectable()
export class CarsService {

    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

    public async getAllCars(): Promise<Car[]> {
        return await this.carRepository.find({}).catch((err) => {
        throw new InternalServerErrorException();
        });
    }

    public async addCar(newCarData: NewCarInput): Promise<Car> {
        const newCar = this.carRepository.create(newCarData);
        await this.carRepository.save(newCar).catch((err) => {
          new InternalServerErrorException();
        });
    
        return newCar;
      }

      public async deleteCar(carId: string): Promise<boolean> {
        const car = await this.carRepository.findOneBy({ id: carId }); // Specify the field explicitly
      
        if (!car) {
          throw new InternalServerErrorException(`Car with ID ${carId} not found`);
        }
      
        await this.carRepository.remove(car).catch((err) => {
          throw new InternalServerErrorException('Failed to delete car.');
        });
      
        return true;
      }
      
      
}
