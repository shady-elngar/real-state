import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Input() tab: any;
  selection: boolean = false;
  secondSelection:boolean = false

  constructor() {}

  backStep(tabNumber: number) {
    this.tab = tabNumber === 2 ? this.back.emit(1) : 2;
  }

  goToNextStep(tabNumber: number) {
    this.tab = tabNumber === 2 ? 3 : this.nextStep.emit(4);
  }
}
