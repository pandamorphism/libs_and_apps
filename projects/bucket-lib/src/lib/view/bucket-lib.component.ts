import {Component, Inject, OnInit} from '@angular/core';
import {FOOD_PROVIDER, FoodService} from '../service/food.service';
import {Observable} from 'rxjs';
import {Food} from '../model/models';

@Component({
  selector: 'bckt-bucketLib',
  template: `
    <div>A Bucket</div>
    <div *ngFor="let foodItem of food$ | async">
      <div>{{foodItem?.name}}</div>
      <img [src]="foodItem?.image">
    </div>
  `,
  styles: []
})
export class BucketLibComponent implements OnInit {
  food$: Observable<Food[]>;

  constructor(@Inject(FOOD_PROVIDER) private foodService: FoodService) {
  }

  ngOnInit() {
    this.food$ = this.foodService.getFood$();
  }

}
