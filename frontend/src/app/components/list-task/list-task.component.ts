import { Component, OnInit } from '@angular/core';
import { Client, Priority, Task, Type } from 'src/app/models/models.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  task?: Task[];
  currentTask: Task = {};
  currentIndex = -1
  currentType: Type = {};
  currentClient: Client = {};
  currentPriority: Priority = {};
  type?: Type[];
  client?: Client[];
  priority?: Priority[];

  filter = {
    from_date: '',
    to_date: ''
  }

  submitted = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.retrieveTask();
  }
  retrieveTask(): void {
    this.taskService.gettask()
      .subscribe(
        data => {
          this.task = data;
          console.log(data, 'task');
        },
        error => {
          console.log(error);
        });
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
  }
  refreshList(): void {
    this.retrieveTask();
    // this.currentTask = {};
    // this.currentIndex = -1;
  }
  saveFilter(): void {

    const data = {
      from_date: this.filter.from_date,
      to_date: this.filter.to_date
    };
    console.log(data, 'filter');
    this.taskService.put_task(data)
      .subscribe(
        response => {
          console.log(response, 'put_task');
          this.task = response
          this.submitted = true
        },
        error => {
          console.log(error);
        });
  }
}
