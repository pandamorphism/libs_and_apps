import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {BucketLibComponent} from './view/bucket-lib.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BucketLibComponent],
  exports: [BucketLibComponent]
})
export class BucketLibModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: BucketLibModule,
      providers
    };
  }
}

