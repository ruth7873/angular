import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginService } from "./login.service";
import { LoginComponent } from "./login/login.component";
const SETTING_ROUTER:Route[]=[
    {path:"",redirectTo:"account",pathMatch:"full"},
    {path:"account",component:AccountComponent,canActivate:[LoginService]},
    {path:"favorites",component:FavoritesComponent,canActivate:[LoginService]},
    {path:"profile",component:ProfileComponent,canActivate:[LoginService]},
]
@NgModule({
    imports:[RouterModule.forChild(SETTING_ROUTER)],
    exports:[RouterModule]
})
export class SettingRouting{

}