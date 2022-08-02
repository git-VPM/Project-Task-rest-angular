import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';



@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent,
    TaskEditComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
