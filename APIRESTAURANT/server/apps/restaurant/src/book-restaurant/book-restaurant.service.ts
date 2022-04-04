import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getManager, Repository } from 'typeorm';
import { BookRestaurant } from '../entities/BookRestaurant';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookRestaurantService {
    constructor(
        @InjectRepository(BookRestaurant)
        private restaurantRepository: Repository<BookRestaurant>,

      ){}


      async addBookRestaurant(createBookDto : CreateBookDto) 
      { 
            const restaurant = BookRestaurant.length;
            const idBookRestaurant = `BR${restaurant+1}`;
            
       
            return await getConnection()
            .createQueryBuilder()
            .insert()
            .into(BookRestaurant)
            .values([
                { idBookRestaurant : idBookRestaurant , idRestaurant :createBookDto.idRestaurant,nameBook : createBookDto.nameBook,
                                    phoneBook : createBookDto.phoneBook ,  timeBook : createBookDto.timeBook ,status : 0 }, 
          
             ])
            .execute();

      }
}
