import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StudentListComponent } from "./modules/students/student-list/student-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StudenDetailesComponent } from "./modules/students/student-detailes/student-detailes.component";
import { StudenAddComponent } from "./modules/students/student-add.component.ts/student-add.component";

const APP_ROUTES: Route[] = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "students", component: StudentListComponent },
    { path: "students/:id", component: StudenAddComponent },
    { path: "**", component: PageNotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class APP_RoutingModule { }