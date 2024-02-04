import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Student, Year } from "../student.model";
import { StudentService } from "../student.service";
import { Subject, debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: "student-list.component.html",
    selector: "student-list"
})

export class StudentListComponent implements OnInit {

    yearType = Year;

    students!: Student[];

    selectedStudent: Student = new Student();

    show: boolean = false;
    edit: boolean = false;

    deleteStudent(id: number) {
        this._studentService.deleteStudent(id).subscribe(data => {
            if (data) {
                let myStudent = this.students.find(student => student.id == id);
                if (myStudent != null)
                    this.students.splice(this.students.indexOf(myStudent), 1)
            }
            else
                alert("cant delete!!!")
        })
    }
    @Output()
    onSaveNewStudentSendTests: EventEmitter<Student> = new EventEmitter();

    showDetailes(s: Student) {
        // this._router.navigate(["/students",id])
        this.selectedStudent = s;
        this.show = true;
        this.onSaveNewStudentSendTests.emit(this.selectedStudent);
    }
    addNewStudentToList(studentToAdd: Student) {
        let index = this.students?.findIndex(s => studentToAdd.id == s.id);
        if (index != -1)
            this._studentService.updateStudent(studentToAdd).subscribe((d) => {
                if (d) {
                    // this.students[index] = studentToAdd;
                    // alert("update success!")
                    this.getstudents();
                    // }
                }
            }, err => alert(err));
        else {
            studentToAdd.id = this.students.length + 1;            
            this._studentService.saveNewStudent(studentToAdd).subscribe((data) => {
                 if (data) {
                alert("add success!")
                this.students.push(studentToAdd)
                }
            }, err => alert(err));
        }

        // this.students.push(studentToAdd);
        // alert(`${studentToAdd.id},${studentToAdd.firstName + studentToAdd.familyName}  the addition completed successfully!!!`);
        this.selectedStudent = new Student();
    }
    editStudent(id: number) {
        this._router.navigate(["/students", id]);
        // this.selectedStudent = s;
        // this.show = false;
    }
    addStudent() {
        this.show = false;
        this.selectedStudent = new Student();
        this.selectedStudent.id = 0;
        // this.add = true;
    }
    getCountmissingDays(id: number): number {
        return this._studentService.getCountAbsenceDaysForStudent(id);
    }
    constructor(private _studentService: StudentService, private _router: Router, private _acr: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.getstudents();
        this.g();
        // let ifUpdate: boolean = false;        
        const student = history.state.student;
        if (student) {
            this.addNewStudentToList(student)
            // alert(ifUpdate)
            // ifUpdate = !ifUpdate
            // alert(ifUpdate)
        }
    }
    getstudents() {
        this._studentService.getStudentsFromServer().subscribe(data =>
            this.students = data)
    }
    showStudentByActive(active: boolean) {
        console.log(active);
        this._studentService.getStudentsFromServerByActive(active).subscribe(data =>
            this.students = data)
    }
    studentName: string = '';
    private searchTerms = new Subject<string>();
    g(): void {
        this.searchTerms.pipe(
            debounceTime(1000),
            distinctUntilChanged(),
            switchMap(() => this._studentService.getStudentsFromServerByName(this.studentName)),
        ).subscribe(data => this.students = data);
    }
    getStudentByName(): void {
        this.searchTerms.next(this.studentName);
    }
    // getStudentByName(){
    //     console.log(this.studentName);
    //     this._studentService.getStudentsFromServerByName(this.studentName).pipe(debounceTime(1000),distinctUntilChanged(), switchMap((term: string) => this._studentService.getStudentsFromServerByName(this.studentName)),).subscribe(d=>
    //         this.students=d)
    // }

}