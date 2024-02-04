import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss']
})
export class DirectiveDemoComponent {
  x: string = 'a'
  aaa: string[] = ["f1", "f2", "f3", "f4", "f5"]
  isActive: boolean = true;
  @HostBinding("[attr.id")
  id: number = 1;

  addClassLtr:Observable<boolean>=new Observable()

}
