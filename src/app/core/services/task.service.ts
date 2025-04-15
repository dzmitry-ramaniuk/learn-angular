import { Injectable } from '@angular/core';
import { Task } from '../../shared/models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
