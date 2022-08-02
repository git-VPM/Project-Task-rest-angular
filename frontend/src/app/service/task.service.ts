import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type, Client, Priority, Task, User, Task_Detail } from '../models/models.model';

const baseUrl = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  gettype(): Observable<Type[]> {
    return this.http.get<Type[]>(baseUrl + '/type'); //connect backend to get type
  }
  get_type_id(id: any): Observable<any> {
    return this.http.get(`${baseUrl + '/type'}/${id}`); //connect backend to get type by pk_bint_id
  }
  getclient(): Observable<Client[]> {
    return this.http.get<Client[]>(baseUrl + '/client'); //connect backend to get client
  }
  get_client_id(id: any): Observable<any> {
    return this.http.get(`${baseUrl + '/client'}/${id}`); //connect backend to get client by pk_bint_id
  }
  getpriority(): Observable<Priority[]> {
    return this.http.get<Priority[]>(baseUrl + '/priority'); //connect backend to get priority
  }
  get_priority_id(id: any): Observable<any> {
    return this.http.get(`${baseUrl + '/priority'}/${id}`); //connect backend to get priority by pk_bint_id
  }
  gettask(): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl + '/task'); //connect backend to get task
  }
  put_task(data: any): Observable<any> {
    return this.http.put(baseUrl + '/task', data);
  }
  get_task_id(id: any): Observable<any> {
    return this.http.get(`${baseUrl + '/task'}/${id}`); //connect backend to get task by pk_bint_id
  }
  post_task(data: any): Observable<any> {
    return this.http.post(baseUrl + '/task', data); //post to task backend
  }
  update_task(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl + '/task'}/${id}`, data);
  }

  get_user(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl + '/user');
  }

  gettask_detail(): Observable<Task_Detail[]> {
    return this.http.get<Task[]>(baseUrl + '/taskdetail');
  }
  post_task_detail(data: any): Observable<any> {
    return this.http.post(baseUrl + '/taskdetail', data);
  }
  get_task_detail_id(id: any): Observable<any> {
    return this.http.get(`${baseUrl + '/taskdetail'}/${id}`);

  }
}