import {Person} from '../shared/person.model';
import {CounterService} from './counter.service';
import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {
  users: Person[] = [
    new Person('Max', true),
    new Person('Anna', true),
    new Person('Chris', false),
    new Person('Manu', false)
  ];

  constructor(private counterService: CounterService) {
  }

  changeUserStatus(id: number) {
    this.users[id].active = !this.users[id].active;
    this.counterService.incrementCounter(this.users[id].active);
  }
}
