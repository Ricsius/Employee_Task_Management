import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUser!: UserData;

  onSelectUser(id: string) {
    this.selectedUser = <UserData>DUMMY_USERS.find(u => u.id === id);
  }
}

class UserData {
  id: string;
  name: string;
  avatar: string;

  constructor(id: string, name: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
  }
}
