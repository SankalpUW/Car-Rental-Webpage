// import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { CarsService } from './cars.service';
// import { NewCarInput } from './dto/new-car.input';
// import { Car } from './entities/car';

// @Resolver()
// export class CarsResolver {
//   constructor(private carsService: CarsService) {}

//   @Query((returns) => [Car])
//   public async cars(): Promise<Car[]> {
//     return await this.carsService.getAllCars().catch((err) => {
//       throw err;
//     });
//   }

//   @Mutation((returns) => Car)
//   public async addNewCar(
//     @Args('newCarData') newCarData: NewCarInput,
//   ): Promise<Car> {
//     return await this.carsService.addCar(newCarData).catch((err) => {
//       throw err;
//     });
//   }
// }

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/car';
import { NewCarInput } from './dto/new-car.input';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }
  
  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Boolean)
  public async deleteCar(
   @Args('carId') carId: string,
): Promise<boolean> {
  return await this.carsService.deleteCar(carId)
    .then(() => {
      return true;  // Return true if deletion is successful
    })
    .catch((err) => {
      throw new Error(`Failed to delete car with ID ${carId}: ${err.message}`);  // Throw an error if something goes wrong
    });
}
}
