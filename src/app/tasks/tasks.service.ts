import { Injectable } from '@angular/core';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];

    constructor() {
      const tasks = localStorage.getItem('tasks');

      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }

    getUserTasks(userId: string) {
      return this.tasks.filter(t => t.userId === userId);
    }

    addTask(task: Task) {
      task.id = new Date().getTime.toString();
      
      this.tasks.unshift(task);
      this.saveTasks();
    }

    removeTask(id: string) {
      this.tasks = this.tasks.filter(t => t.id !== id);

      this.saveTasks();
    }

    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}
