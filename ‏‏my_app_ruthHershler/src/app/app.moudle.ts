import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StudentModule } from "./modules/students/students.module";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { APP_RoutingModule } from "./app-routing.module";
import { LoginService } from "./modules/settings/login.service";


@NgModule({
    declarations: [AppComponent, HomeComponent,PageNotFoundComponent],
    imports: [BrowserModule, StudentModule, APP_RoutingModule],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {

}