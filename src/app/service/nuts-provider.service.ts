import {Injectable} from '@angular/core';
import {Food, FoodService} from 'bucketLib';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutsProviderService implements FoodService {

  constructor() {
  }

  getFood$(): Observable<Food[]> {
    return of([{
      name: 'Squirrel found a Nut!',
      image: 'https://vignette.wikia.nocookie.net/mystiqueisland/images/6/68/Acorn_Body.png/revision/latest?cb=20130623190324'
    }]);
  }
}
