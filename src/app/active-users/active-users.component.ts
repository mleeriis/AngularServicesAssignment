import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Person} from '../shared/person.model';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() activeUsers: Person[];
  @Input() id: number;

  constructor(private usersService: UsersService) {
  }

  changeStatus(id: number) {
    this.usersService.changeUserStatus(id);
  }
}
