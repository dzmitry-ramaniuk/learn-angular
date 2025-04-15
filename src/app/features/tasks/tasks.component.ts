import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TaskView } from '../task/task.component';
import { Task } from '../../shared/models/task.model';
import { TaskService } from '../../core/services/task.service';

@Component({
  imports: [NgFor, TaskView],
  templateUrl: './tasks.component.html',
})
export class TaskList {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
