import { NgModule } from "@angular/core";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudenDetailesComponent } from "./student-detailes/student-detailes.component";
import { StudenAddComponent } from "./student-add.component.ts/student-add.component";
import { ShowTestsComponent } from "./show-tests/show-tests.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StudentService } from "./student.service";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ObservableModule } from "../observable/observable.module";

@NgModule({
declarations:[StudentListComponent,StudenDetailesComponent,StudenAddComponent,ShowTestsComponent,],
imports:[BrowserModule,FormsModule,ReactiveFormsModule,ObservableModule,HttpClientModule,RouterModule],
providers:[StudentService],
exports:[StudentListComponent,ShowTestsComponent],
})
export class StudentModule{

}