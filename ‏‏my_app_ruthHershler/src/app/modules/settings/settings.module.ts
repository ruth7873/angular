import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingRouting } from './setting-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';



@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    FavoritesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,SettingRouting
  ],
  // providers:[LoginService]
})
export class SettingsModule { }
