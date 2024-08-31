import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pre-step',
  templateUrl: './pre-step.component.html',
  styleUrls: ['./pre-step.component.scss'],
})
export class PreStepComponent implements OnInit {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  selection: number = 0;

  ngOnInit() {}

  goToNextStep() {
    this.nextStep.emit(2);
  }

  selectCamp(selection: number) {
    if (selection === this.selection) {
      this.selection = 0;
    }else{
      this.selection = selection;
    }
  }
}
