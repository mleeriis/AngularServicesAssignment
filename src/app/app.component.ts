import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {Person} from './shared/person.model';
import {UsersService} from './services/users.service';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent implements OnInit {
  allUsers: Person[] = [];
  timesChangedToActive;
  timesChangedToInactive;

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  ngOnInit() {
    this.allUsers = this.usersService.users;
    this.timesChangedToActive = this.counterService.inactiveToActive;
    this.timesChangedToInactive = this.counterService.activeToInactive;
  }

  updateCounters(){
    this.timesChangedToActive = this.counterService.inactiveToActive;
    this.timesChangedToInactive = this.counterService.activeToInactive;
  }

}
