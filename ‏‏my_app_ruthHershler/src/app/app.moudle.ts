import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudenDetailesComponent } from "./student-detailes/student-detailes.component";
import { StudenAddComponent } from "./student-add.component.ts/student-add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShowTestsComponent } from "./show-tests/show-tests.component";
import { StudentService } from "./student.service";
import { ObservableComponent } from "./observable/observable.component";
import {HttpClientModule} from "@angular/common/http"
@NgModule({
    declarations:[AppComponent,StudentListComponent,StudenDetailesComponent,StudenAddComponent,ShowTestsComponent,ObservableComponent],
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule],
    providers:[StudentService],
    bootstrap:[AppComponent]
})
export class AppModule{

}