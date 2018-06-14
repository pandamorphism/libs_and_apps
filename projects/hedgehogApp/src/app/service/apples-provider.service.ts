import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Food, FoodService} from 'bucketLib';

@Injectable({
  providedIn: 'root'
})
export class ApplesProviderService implements FoodService {

  constructor() {
  }

  getFood$(): Observable<Food[]> {
    return of([{
      name: 'Hedgehog found an apple',
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&h=350'
    }]);
  }
}
