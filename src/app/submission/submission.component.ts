import { Component, EventEmitter, Input, Output } from '@angular/core';
import { interval, take, map, finalize } from 'rxjs';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss'],
})
export class SubmissionComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Input() tab: any;
  count:number = 1

  constructor() {
    this.submittingSteps()
  }

  backStep() {
    this.back.emit(5);
  }

  submittingSteps() {
      const duration = 7000; 
      const totalCount = 100;
      const intervalTime = duration / totalCount;
  
      interval(intervalTime)
        .pipe(
          take(totalCount),
          map((value) => value + 1) ,
          finalize(()=>{
          this.tab = 7
          })
        )
        .subscribe((count) => (this.count = count));
    }
}
