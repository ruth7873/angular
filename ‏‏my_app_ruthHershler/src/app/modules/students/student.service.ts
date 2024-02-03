import { Injectable } from "@angular/core";
import { AbsenceDays } from "./absence-days.model";
import { Student } from "./student.model";
import { Test } from "./test.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// const STUDENTS = [
//     { id: 1, firstName: "Zipi", familyName: "Lindenfeld", adress: "כהנמן 83 א בני ברק", phone: `0556776310`, active: false, marksAvg: 98, profession: 1, leaveDate: new Date('10-10-2023'), year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 100)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] },
//     { id: 3, firstName: "Ima", familyName: "Lindenfeld", adress: "כהנמן 83 א בני ברק", phone: `0504179302`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 1, year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 98)], absenceDays: [new AbsenceDays(new Date('10-10-2023'), 2)] },
//     { id: 2, firstName: "Ruth", familyName: "Hershler", adress: "פתח תקווה", phone: `0533137873`, active: true, marksAvg: 99, leaveDate: new Date(), profession: 1, year: 2, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10)] },
//     { id: 4, firstName: "Aba", familyName: "Lindenfeld", adress: "בני ברק ", phone: `0504179301`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 2, year: 3, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 98)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] },
//     { id: 5, firstName: " איציק ", familyName: "לינדנפלד", adress: "בני ברק ", phone: `0504179302`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 3, year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 100), new Test(3, new Date('10-20-2023'), "Test2", 100)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] },
//     { id: 6, firstName: " קובי ", familyName: "לינדנפלד", adress: "בני ברק ", phone: `0504179302`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 3, year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 98), new Test(3, new Date('10-20-2023'), "Test2", 99)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] },
//     { id: 7, firstName: " רפאל ", familyName: "לינדנפלד", adress: "בני ברק ", phone: `0504179302`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 3, year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 98), new Test(3, new Date('10-20-2023'), "Test2", 99)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] }
// ]

@Injectable()
export class StudentService {
    STUDENTS: Student[] = [];
    getStudentsFromServer(): Observable<Student[]> {
        return this._http.get<Student[]>("/api/Students");
    }
    getStudentsFromServerByActive(active: boolean): Observable<Student[]> {
        return this._http.get<Student[]>("/api/Students/active=" + active)
    }
    getStudentsFromServerByName(name:string):Observable<Student[]>{
        return this._http.get<Student[]>("api/Students/name="+name)
    }
    saveNewStudent(student: Student): Observable<boolean> {
        return this._http.post<boolean>("api/Students", student)
    }
    updateStudent( student: Student): Observable<boolean> {
        return this._http.put<boolean>(`api/Students/${student.id}`, student);
    }
    deleteStudent(id:number):Observable<boolean>{
        return this._http.delete<boolean>("api/Students/"+id);
    }
    // getStudents(): Student[] {
    //      return STUDENTS;
    // }
    // getStudentsSlowly(): Promise<Student[]> {
    //     return new Promise((res, rej) => {
    //         setTimeout(() => {
    //             res(STUDENTS);
    //         }, 3000);
    //     })
    // }
    getCountAbsenceDaysForStudent(id: number): number {
        let s = this.STUDENTS.find(student => student.id == id);
        let sum = 0;
        if (s != undefined) {
            for (let i = 0; i < s.absenceDays.length; i++)
                sum += s.absenceDays[i].countDays;
        }
        return sum;
    }
    getStudentMarkAvgByTests(tests: Test[]): number {

        if (tests != null) {
            let sum = 0;
            for (let i = 0; i < tests.length; i++)
                sum += tests[i].mark;
            return sum / tests.length;
        }
        return -1;
    }

    getValue(): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, 5000);
            //reject("no number found");
        });
    }

    callFunc() {
        var x: number;
        this.getValue().then((value) => {
            x = value;
            console.log("in the middle");
        }).catch(err => {
            x = 0;
        });
        console.log("after call getValue");
    }

    constructor(private _http: HttpClient) {
        this.callFunc();
    }

}