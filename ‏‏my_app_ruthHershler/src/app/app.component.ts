import { Component } from "@angular/core";
import { Student } from './modules/students/student.model';

@Component({
    // template: `<p>{{calc_time()}}<br/>{{title}}</p><student-list></student-list>`,
    templateUrl: "app.component.html",
    selector: "my-app-root"
})

export class AppComponent {
    x: Date = new Date();
    time!: number;
    title: string = "hello :)";

    selectedStudent: Student = new Student();

    calc_time() {
        this.x = new Date(Date.now());
        this.time = this.x.getHours();
        if (this.time > 6 && this.time < 12)
            return "good morning!!!";
        if (this.time >= 12 && this.time < 18)
            return "good afternoon!!!";
        return "good night!!!";
    }

    sendTests(s: Student) {
        this.selectedStudent = s;
    }


}

