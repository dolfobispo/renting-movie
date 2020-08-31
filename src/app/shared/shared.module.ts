import { BackgroundUrlPipe } from '../pipes/background-url.pipe';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  imports: [AngularMaterialModule],
    declarations: [
    BackgroundUrlPipe
    ],
    exports: [
     BackgroundUrlPipe,
     FormsModule, AngularMaterialModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

  })
  export class SharedModule {}