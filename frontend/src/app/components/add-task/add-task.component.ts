import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, Priority, Task, Type } from 'src/app/models/models.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task: Task = {
    rep_date: '',
    vchr_title: '',
    vchr_remarks: '',
    created_date: undefined,
    fk_type: undefined,
    fk_client: undefined,
    fk_priority: undefined,
    status: 0
  };
  // taskdetail: Task_Detail = {}
  type?: Type[];
  client?: Client[];
  priority?: Priority[];
  submitted = false;

  constructor(
    private taskService: TaskService,
    private router: Router) { }
  ngOnInit(): void {
    this.retrieve_prerequisite();

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
  }
  saveTask(): void {
    const data = {
      rep_date: this.task.rep_date,
      vchr_title: this.task.vchr_title,
      vchr_remarks: this.task.vchr_remarks,
      fk_type: Number(this.task.fk_type),
      fk_client: Number(this.task.fk_client),
      fk_priority: Number(this.task.fk_priority),
      created_date: this.task.created_date,
      fk_user_detail: this.task.fk_user_detail,
      status: 0
    };
    const detail = {
      fk_task: this.task.pk_bint_id,
      vchr_remarks: this.task.vchr_remarks,
      fk_user_detail: this.task.fk_user_detail,
      date_action: this.task.rep_date,
      status: 0
    };
    console.log(data, 'data')
    console.log(detail, 'detail')
    if (data.rep_date == '') {
      alert('Reported date cannot be empty')
      return
    } if (data.vchr_title == '') {
      alert('Title cannot be empty')
      return
    } if (data.vchr_remarks == '') {
      alert('Remarks cannot be empty')
      return
    } if (data.fk_type == undefined) {
      alert('Select type')
      return
    } if (data.fk_client == undefined) {
      alert('Select client')
      return
    } if (data.fk_priority == undefined) {
      alert('Select priority')
      return
    }
    console.log(this.type, 'task')
    this.taskService.post_task(data)
      .subscribe(
        response => {
          console.log(response);
          if (response.status == 0) {
            this.submitted = false
            alert("Can't save to database")
          }
          else {
            this.submitted = true
            this.router.navigate(['/list']);
          }
        },
        error => {
          console.log(error);
        });
  }
  // newTask(): void {        //TO HAVE ADD BUTTON AFTER ADDING A TASK
  //   this.submitted = false;
  //   this.task = {
  //     rep_date: '',
  //     vchr_title: '',
  //     vchr_remarks: '',
  //     created_date: undefined,
  //     fk_user_detail__vchr_name: undefined,
  //     fk_type: undefined,
  //     fk_client: undefined,
  //     fk_priority: undefined,
  //     status: 0,
  //   };
  // }
}