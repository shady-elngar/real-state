import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prob',
  templateUrl: './prob.component.html',
  styleUrls: ['./prob.component.scss'],
})
export class ProbComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Input() tab: any;
  houseDesc:string = ''
  description:string = ''

  backStep(tabNumber: number) {
    this.tab = tabNumber === 4 ? this.back.emit(3) : 4;
  }

  goToNextStep(tabNumber: number) {
    this.tab = tabNumber === 4 ? 5 : this.nextStep.emit(6);
  }
}
