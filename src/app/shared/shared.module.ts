import { BackgroundUrlPipe } from '../pipes/background-url.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    BackgroundUrlPipe
    ],
    exports: [
     BackgroundUrlPipe,
     FormsModule
    ]
  })
  export class SharedModule {}