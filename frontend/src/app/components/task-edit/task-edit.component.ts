import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Priority, Task, Type, User } from 'src/app/models/models.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  currentTask: Task = {
    rep_date: '',
    vchr_title: '',
    vchr_remarks: '',
    created_date: '',
    fk_type: '',
    fk_client: '',
    fk_priority: '',
    fk_user_detail: '',
  };
  type?: Type[];
  client?: Client[];
  priority?: Priority[];
  user?: User[];
  message = '';
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.retrieve_prerequisite();
    this.getTask(this.route.snapshot.params.id);
  }
  retrieve_prerequisite(): void {
    this.taskService.gettype()
      .subscribe(
        data => {
          this.type = data;
          console.log(data, 'type');
        },
        error => {
          console.log(error);
        });
    this.taskService.getclient()
      .subscribe(
        data => {
          this.client = data;
          console.log(data, 'client');
        },
        error => {
          console.log(error);
        });
    this.taskService.getpriority()
      .subscribe(
        data => {
          this.priority = data;
          console.log(data, 'priority');
        },
        error => {
          console.log(error);
        });
    this.taskService.get_user()
      .subscribe(
        data => {
          this.user = data;
          console.log(data, 'user');
        },
        error => {
          console.log(error);
        });
  }
  getTask(id: string): void {
    this.taskService.get_task_id(id)
      .subscribe(
        data => {
          this.currentTask = data;
          console.log(data, 'get_task_id');
        },
        error => {
          console.log(error);
        });
  }
  change() {
    console.log()
  }
  updateTask(): void {
    this.message = '';
    console.log(this.currentTask, ' this.currentTask');
    this.taskService.update_task(this.currentTask.pk_bint_id, this.currentTask)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This task was updated successfully!';
          this.router.navigate(['/list']);
        },
        error => {
          console.log(error);
        });
  }
}
