import { Component, Input, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  
  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    
  }
}
