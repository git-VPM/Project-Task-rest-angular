import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Priority, Task_Detail, Type, User } from 'src/app/models/models.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task?: Task_Detail[];
  currentTask: Task_Detail = {
    fk_task_id: '',
    fk_task__vchr_title: '',
    vchr_remarks: '',
    fk_user_detail__vchr_name: '',
    date_action: '',
    status: 0
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
    this.get_task_details(this.route.snapshot.params.id);
  }
  get_task_details(id: string): void {
    this.taskService.get_task_detail_id(id)
      .subscribe(
        data => {
          this.task = data;
          console.log(data, 'get_taskdetail_id');
        },
        error => {
          console.log(error);
        });
  }
}