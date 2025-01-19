import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent, UserData } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: UserData;

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find(u => u.id === id);
  }
}