export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  incrementCounter(previouslyActive: boolean) {
    if (previouslyActive) {
      this.activeToInactive++;
    } else {
      this.inactiveToActive++;
    }
  }
}
