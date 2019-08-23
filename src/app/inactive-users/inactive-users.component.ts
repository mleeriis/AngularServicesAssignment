import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Person} from '../shared/person.model';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() inactiveUsers: Person[];

  constructor(private usersService: UsersService) {
  }

  changeStatus(id: number) {
    this.usersService.changeUserStatus(id);
  }
}
