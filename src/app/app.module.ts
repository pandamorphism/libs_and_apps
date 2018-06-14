import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BucketLibModule, FOOD_PROVIDER} from 'bucketLib';
import {NutsProviderService} from './service/nuts-provider.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BucketLibModule.forRoot([
      {
        provide: FOOD_PROVIDER,
        useClass: NutsProviderService
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
