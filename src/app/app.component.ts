import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription, debounceTime, filter, map, tap } from 'rxjs';
import { InputComponent } from './components/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit{
  title = 'day34';

  @ViewChild(InputComponent)
  inputComp!: InputComponent

  keyPressed$!: Observable<string>
  
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  ngAfterViewInit(): void {
    // observable keyPressed$ takes the child inputComp and converts it to uppercase every 1s
    this.keyPressed$ = this.inputComp.keyPressed.pipe(
      debounceTime(1000),
      // another useful one - distinctUntilChanged / distinctUntilKeyChanged
      map(s => s.toUpperCase())
    )
  }


  pressed() {

  }

}
