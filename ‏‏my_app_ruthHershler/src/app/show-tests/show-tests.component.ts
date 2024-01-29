import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Test } from '../test.model';

@Component({
  selector: 'app-show-tests',
  templateUrl: './show-tests.component.html',
  styleUrls: ['./show-tests.component.scss']
})
export class ShowTestsComponent {

  @Input()
  tests: Test[] = [];


  average: number = -1;

  calAvg(): number {
    this.average = this._studentService.getStudentMarkAvgByTests(this.tests);
    return this.average;
  }

  constructor(private _studentService: StudentService) {
  }
}
