import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'angular-app-new';
  users = DUMMY_USERS;
  selectedUsrId!: string;
  selectedUsrObj!: any;
  selectedUserName!: string;

  onSelectUser(id: string){
    console.log(id);
    this.selectedUsrId = id;
    this.selectedUsrObj = this.users.find(user => user.id === this.selectedUsrId);
    this.selectedUserName = this.selectedUsrObj.name;
  }
}
