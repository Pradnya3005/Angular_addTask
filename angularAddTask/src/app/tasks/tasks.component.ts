import { Component, Input} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) selectedName!: string;
  @Input({required: true}) selectedUserId!: string;
  isTaskAdded = false;

  constructor(private tasksService: TasksService){}

  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.selectedUserId);
  }

  onStartAddTask(){
    this.isTaskAdded = true;
  }

  onCloseAddTask(){
    this.isTaskAdded = false;
  }

  
}
