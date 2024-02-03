import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, interval, map } from 'rxjs';
import { Student } from '../../students/student.model';
import { StudentService } from '../../students/student.service';
import { Test } from '../../students/test.model';
import { AbsenceDays } from '../../students/absence-days.model';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

   students:Student[] =[];// [{ id: 1, firstName: "Zipi", familyName: "Lindenfeld", adress: "כהנמן 83 א בני ברק", phone: `0556776310`, active: false, marksAvg: 98, profession: 1, leaveDate: new Date('10-10-2023'), year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 100)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] },
  // { id: 3, firstName: "Ima", familyName: "Lindenfeld", adress: "כהנמן 83 א בני ברק", phone: `0504179302`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 1, year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 98)], absenceDays: [new AbsenceDays(new Date('10-10-2023'), 2)] },
  // { id: 2, firstName: "Ruth", familyName: "Hershler", adress: "פתח תקווה", phone: `0533137873`, active: true, marksAvg: 99, leaveDate: new Date(), profession: 1, year: 2, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10)] },
  // { id: 4, firstName: "Aba", familyName: "Lindenfeld", adress: "בני ברק ", phone: `0504179301`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 2, year: 3, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 98)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] },
  // { id: 5, firstName: " איציק ", familyName: "לינדנפלד", adress: "בני ברק ", phone: `0504179302`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 3, year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 100), new Test(3, new Date('10-20-2023'), "Test2", 100)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] },
  // { id: 6, firstName: " קובי ", familyName: "לינדנפלד", adress: "בני ברק ", phone: `0504179302`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 3, year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 98), new Test(3, new Date('10-20-2023'), "Test2", 99)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] },
  // { id: 7, firstName: " רפאל ", familyName: "לינדנפלד", adress: "בני ברק ", phone: `0504179302`, active: true, marksAvg: 100, leaveDate: new Date(), profession: 3, year: 1, tests: [new Test(1, new Date('10-10-2023'), "Test1", 100), new Test(2, new Date('01-01-2023'), "Test2", 98), new Test(3, new Date('10-20-2023'), "Test2", 99)], absenceDays: [new AbsenceDays(new Date('01-01-2023'), 10), new AbsenceDays(new Date('10-10-2023'), 2)] }];
   sendMail: Observable<string> = new Observable(obs => {
    for (var element of this.students) {
      if (element.active)
        obs.next(element.phone)
    }
  });
  sendMail2:Observable<Student>=from(this.students).pipe(filter(x=> x.active))
  mail: string[]=[];
  mail2:string[]=[];
  sendEmail(){
    this.sendMail.subscribe((val) => {
      this.mail.push(`המייל נשלח בהצלחה לכתובת: ${val} `)
    })
    // this.sendMail2.pipe(map(s=>s.phone)).subscribe((val)=>{
    //   this.mail2.push(`המייל נשלח בצורה שונה בהצלחה לכתובת: ${val} `)
    // })
  }
  name!: string;
  x!: string;
  i: number = 0;
  timer!: string;
  time: Observable<string> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date().toLocaleTimeString());
    }, 1000);
  })
  timerInterval!: string;
  timeInterval: Observable<string> = interval(1000).pipe(map(x => { return new Date().toLocaleTimeString() }));
  source: Observable<string> = new Observable((observer) => {
    while (this.i < this.students?.length) {
      observer.next(this.students[this.i].firstName);
      this.i++;
    }
  });
  studentObservable = from(this.students);
  constructor(private _studentService: StudentService) {}
  ngOnInit(): void {
    this._studentService.getStudentsFromServer().subscribe(data=>this.students=data);
    this.source.subscribe((val) => {
      this.x = val;
      console.log("1: ", val);
    })
    this.studentObservable.pipe(map(x => {
      return x.firstName + " " + x.familyName;
    })).subscribe((val) => console.log("2:", val)
    )
    this.time.subscribe((val) => {
      this.timer = val;
      
    })
    this.timeInterval.subscribe((val) => {
      this.timerInterval = val
    })
    
  }

}
