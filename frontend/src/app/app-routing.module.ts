import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListTaskComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'edit/:id', component: TaskEditComponent },
  // { path: 'taskdetail', component: TaskDetailsComponent },
  { path: 'taskdetail/:id', component: TaskDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
