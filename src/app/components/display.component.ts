import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  
  fb = inject(FormBuilder)
  form!: FormGroup
  name!: string
  email!: string

  form$!: Observable<any>

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required])
    })
    // valueChanges emits an observable of the form control each time there is a change 
    this.form$ = this.form.valueChanges
    // Subscribe to the valueChanges observable
    this.form.valueChanges.subscribe(v => { })

    // An observable is emitted whenever there is a change to the form's value
    // This observable can be subscribed to
    // Tap allows for side effects to be performed without modifying the emitted value
    /*
    this.form.valueChanges.pipe(
      tap(v => {
        this.name = v['name']
        this.email = v['email']
      })
    )
    */
    
    /*
    this.form.valueChanges.subscribe(
      v => {
        console.info('value: ', v)
      }
    )
    this.form.statusChanges.subscribe(
      v => {
        console.info('status: ', v)
      }
    )
    */
  }
}
