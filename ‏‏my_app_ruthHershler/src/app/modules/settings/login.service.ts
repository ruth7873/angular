import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable()

export class LoginService implements CanActivate {
    identified: boolean = false;

    canActivate(): boolean {
       
        if (this.identified == false)
        {
            alert("yuo cant enter, login!!!")
            this.router.navigate(['/login'])
            return false;
        }
        return true;
    }
    change(): void {
        this.identified=!this.identified
    }
    get():boolean{
       return this.identified
    }
    constructor(private router:Router){}
}