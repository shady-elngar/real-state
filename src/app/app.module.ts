import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import { PreStepComponent } from './pre-step/pre-step.component';
import { SelectionComponent } from './selection/selection.component';
import { ProbComponent } from './prob/prob.component';
import { SubmissionComponent } from './submission/submission.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    PreStepComponent,
    SelectionComponent,
    ProbComponent,
    SubmissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
