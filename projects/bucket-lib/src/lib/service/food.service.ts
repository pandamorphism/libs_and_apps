import {Observable} from 'rxjs';
import {Food} from '../model/models';
import {InjectionToken} from '@angular/core';

export const FOOD_PROVIDER: InjectionToken<FoodService> = new InjectionToken<FoodService>('food.service');

export interface FoodService {
  getFood$(): Observable<Food[]>;
}
