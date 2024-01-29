import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbsenceDays } from "../absence-days.model";
import { Profession, Student, Year } from "../student.model";

@Component({
    selector: "student-detailes",
    templateUrl: './student-detailes.component.html'
})

export class StudenDetailesComponent implements OnInit {

    @Input()
    student: Student=new Student();

    absenceDays: AbsenceDays[] = [];

    missingFromDate!: Date;
    missingDays!: number;

    totalMissingDays: number = 0;


    @Output()
    onSaveStudent: EventEmitter<Student> = new EventEmitter();

    onSaveClick() {
        // if (this.missingDays && this.missingDays > 0) {
        //     this.student.absenceDays.push({ startDate: this.missingFromDate, days: this.missingDays });
        //     this.student['absenceDays'].push({ startDate: this.missingFromDate, days: this.missingDays });
        // }
        this.onSaveStudent.emit(this.student);
    }

    constructor() {
    }
    yearType = Year;
    professionType = Profession;

    ngOnInit(): void {
    }
}