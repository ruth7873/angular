import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:"[appHighLight]"
})
export class HighLightDirective{
    @Input()
    appHighLight!:string;
constructor(private _element:ElementRef){
    console.log("highlight directive created");
}
ngOnInit(){
    // this._element.nativeElement.style.backgroundColor=this.appHighLight|| "yellow";
}
@HostListener("mouseenter")
onMouseEnter(){
    this._element.nativeElement.style.backgroundColor=this.appHighLight|| "yellow";
}
@HostListener("mouseleave")
onMouseLeave(){
    this._element.nativeElement.style.backgroundColor=null;
}
}