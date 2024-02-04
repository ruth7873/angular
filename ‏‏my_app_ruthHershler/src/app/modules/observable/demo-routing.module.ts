import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DirectiveDemoComponent } from "./directive-demo/directive-demo.component";

@NgModule({
    imports:[RouterModule.forChild([
        {path:"",pathMatch:"full",redirectTo:"directive"},
        {path:"directive",component:DirectiveDemoComponent
    }
    ])],
    exports:[RouterModule]
})
export class DemoRoutingModule{

}