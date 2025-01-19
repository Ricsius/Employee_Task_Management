import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  constructor(private tasksService: TasksService) {}

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    let task = {
      id: '',
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    };

    this.tasksService.addTask(task);
    this.close.emit();
  }
}
