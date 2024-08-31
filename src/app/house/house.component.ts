import { Component } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent {
  tab: number = 1;

  goToNextStep(value: number) {
    this.tab = value;
  }

  backStep(value: number) {
    this.tab = value;
  }
}
