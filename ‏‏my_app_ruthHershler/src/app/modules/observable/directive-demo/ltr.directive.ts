import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector:"[ltr]"
})
export class LtrDirective{
    constructor(private _el:ElementRef){
        console.log("xcvbnm,nbvcxzcvbn");
        
    }
    ngOnInit(){
        this._el.nativeElement.classList.add("ltr");
    }
}