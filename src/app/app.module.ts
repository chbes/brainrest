import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule } from '@angular/material';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TimeInputComponent } from './time-input/time-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { LeftPadPipe } from './pipe/left-pad.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TimeInputComponent,
    NumberInputComponent,
    LeftPadPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
