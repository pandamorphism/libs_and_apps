import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BucketLibModule, FOOD_PROVIDER} from 'bucketLib';
import {ApplesProviderService} from './service/apples-provider.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BucketLibModule.forRoot([
      {
        provide: FOOD_PROVIDER,
        useClass: ApplesProviderService
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
