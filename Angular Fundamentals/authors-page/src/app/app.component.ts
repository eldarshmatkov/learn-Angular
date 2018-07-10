import { Component } from '@angular/core';
import { UserService } from './users-component/users-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users;

  constructor(service: UserService) {
      this.users = service.getUsers();
  }
}
