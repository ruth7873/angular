import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Student, Year } from "../student.model";
import { StudentService } from "../student.service";

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
        this._studentService.deleteStudent(id).subscribe(data=>
            {
                if(data)
                {
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
        this.selectedStudent = s;
        this.show = true;
        this.onSaveNewStudentSendTests.emit(this.selectedStudent);
    }
    constructor(private _studentService: StudentService) {
    }
    addNewStudentToList(studentToAdd: Student) {
        let index = this.students.findIndex(s => studentToAdd.id == s.id);
        if (index != -1)
            //     this.students[index] = studentToAdd;
            this._studentService.updateStudent(studentToAdd.id, studentToAdd).subscribe(data => {
                // if (data) {
                    alert("update success!")
                    this.students[index] = studentToAdd;
                    this.getstudents();
                // }
            },err=>alert("err"));
        else
            this._studentService.saveNewStudent(studentToAdd).subscribe(data => {
                // if (data) {
                    alert("add success!")
                    this.students.push(studentToAdd)
                // }
            },err=>alert(err));


        // this.students.push(studentToAdd);
        alert(`${studentToAdd.id},${studentToAdd.firstName + studentToAdd.familyName}  the addition completed successfully!!!`);
        this.selectedStudent = new Student();
    }
    editStudent(s: Student) {
        this.selectedStudent = s;
        this.show = false;
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
    ngOnInit(): void {
    this.getstudents();
    }
    getstudents(){
        this._studentService.getStudentsFromServer().subscribe(data =>
            this.students = data)
    }
    showStudentByActive(active: boolean) {
        console.log(active);
        this._studentService.getStudentsFromServerByActive(active).subscribe(data =>
            this.students = data)
    }

}