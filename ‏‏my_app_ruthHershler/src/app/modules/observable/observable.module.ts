import { NgModule } from "@angular/core";
import { ObservableComponent } from "./observable/observable.component";
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { DemoRoutingModule } from "./demo-routing.module";
import { CommonModule } from "@angular/common";
import { HighLightDirective } from "./directive-demo/highlight.directive";
import { LtrDirective } from "./directive-demo/ltr.directive";

@NgModule({
declarations:[ObservableComponent, DirectiveDemoComponent,HighLightDirective,LtrDirective],
imports:[CommonModule,DemoRoutingModule],
exports:[ObservableComponent],
})

export class ObservableModule{
}