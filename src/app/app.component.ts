import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS;
}
