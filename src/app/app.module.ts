import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSashusyaModule } from 'ng-sashusya';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyNumbersInputComponent } from './components/only-numbers-input/only-numbers-input.component';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { GenerateInputsDirective } from './core/directives/generate-inputs.directive';
import { OnlyNumbersDirective } from './core/directives/only-numbers.directive';
import { EmailValidateDirective } from './core/directives/email-validate.directive';
import { InnerComponent } from './components/inner/inner.component';
import { RxjsTestComponent } from './components/rxjs-test/rxjs-test.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumbersInputComponent,
    EmailInputComponent,
    GenerateInputsDirective,
    OnlyNumbersDirective,
    EmailValidateDirective,
    InnerComponent,
    RxjsTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgSashusyaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
