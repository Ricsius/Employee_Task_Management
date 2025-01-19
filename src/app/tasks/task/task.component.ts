import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
}

type Task = {
  id: string;
  userId: string
  title: string
  summary: string
  dueDate: string
}
