import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ObservableComponent } from "./observable/observable.component";
import { RouterModule } from "@angular/router";

@NgModule({
declarations:[ObservableComponent],
imports:[BrowserModule,RouterModule],
exports:[ObservableComponent],
})

export class ObservableModule{

}