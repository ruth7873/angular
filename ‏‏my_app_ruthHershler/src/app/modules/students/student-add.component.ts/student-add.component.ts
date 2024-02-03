import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AbsenceDays } from "../absence-days.model";
import { Profession, Student, Year } from "../student.model";
import { StudentService } from "../student.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "student-add",
    templateUrl: './student-add.component.html'
})

export class StudenAddComponent implements OnInit {

    startDate!: Date;
    countDays!: number;

    students: Student[] = [];

    totalMissingDays: number = 0;

    private _selectedStudent: Student = new Student();

    professionType = Profession;

    yearType = Year;

    public get selectedStudent(): Student {
        if (this._selectedStudent)
            return this._selectedStudent;
        this._selectedStudent = new Student();
        return this._selectedStudent;
    }

    studentForm!: FormGroup;

    @Input()
    public set selectedStudent(value: Student) {
        this._selectedStudent = value;
        if (this._selectedStudent != undefined) {
            this.studentForm = new FormGroup({
                id: new FormControl(this.selectedStudent.id, Validators.required),
                firstName: new FormControl(this.selectedStudent.firstName, [Validators.required, Validators.minLength(3), Validators.min(1)]),
                familyName: new FormControl(this.selectedStudent.familyName, [Validators.required, Validators.minLength(3)]),
                phone: new FormControl(this.selectedStudent.phone, [Validators.required, Validators.maxLength(10)]),
                profession: new FormControl(this.selectedStudent.profession, Validators.required),
                adress: new FormControl(this.selectedStudent.adress),
                marksAvg: new FormControl(this.selectedStudent.marksAvg),
                year: new FormControl(this.selectedStudent.year),
                startDate: new FormControl(""),
                countDays: new FormControl("")
            });
        }
    }

    @Input()
    show: boolean = false;

    @Output()
    onSaveNewStudent: EventEmitter<Student> = new EventEmitter();


    saveNewStudent() {
        if (this.startDate && this.countDays && this.countDays > 0)
            this.selectedStudent.absenceDays.push(new AbsenceDays(this.startDate, this.countDays));
        this.selectedStudent.adress = this.studentForm.controls['adress'].value;
        this.selectedStudent.familyName = this.studentForm.controls['familyName'].value;
        this.selectedStudent.firstName = this.studentForm.controls['firstName'].value;
        this.selectedStudent.marksAvg = this.studentForm.controls['marksAvg'].value;
        this.selectedStudent.phone = this.studentForm.controls['phone'].value;
        this.selectedStudent.profession = this.studentForm.controls['profession'].value;
        this.selectedStudent.year = this.studentForm.controls['year'].value;
        if (!this.id)
            this.selectedStudent.id = this.students.length + 1 //this.studentForm.controls['id'].value;
        //this.selectedStudent = this.studentForm.value;
        for (let i = 0; i < this.selectedStudent.absenceDays?.length; i++)
            console.log(this.selectedStudent.absenceDays[i].countDays + " " + this.selectedStudent.absenceDays[i].startDate)
        this.selectedStudent.active = true;
        this._router.navigate(["/students"], { state: { student: this.selectedStudent } })
        this.onSaveNewStudent.emit(this.selectedStudent);
    }
    getCountmissingDays(id: number): number {
        return this._studentService.getCountAbsenceDaysForStudent(id);
    }
    constructor(private _studentService: StudentService, private _acr: ActivatedRoute, private _router: Router) {
    }
    id!: number;
    ngOnInit(): void {
        this._acr.paramMap.subscribe(paramMap => {
            if (paramMap) {
                if (paramMap.has("id")) {
                    this.id = +(paramMap.get("id")!);
                }
            }
        });
        this._studentService.getStudentsFromServer().subscribe(data => {
            if (this.id) {

                this.selectedStudent = (data.find(x => x.id == this.id)!);
            }
        })
        // this._studentService.getStudentsFromServer().subscribe(data =>
        //     this.students = data)

    }
}