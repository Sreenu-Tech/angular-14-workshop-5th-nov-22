import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,UntypedFormGroup,UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('Sreenu Tech',{nonNullable:true}),
    email: new FormControl<string>(''),
    phoneNo: new FormControl(''),
    message: new FormControl('')
  });


  contactFormUnTyped = new UntypedFormGroup({
    name: new UntypedFormControl('Sreenu Tech',{nonNullable:true}),
    email: new UntypedFormControl(''),
    phoneNo: new UntypedFormControl(''),
    message: new UntypedFormControl('')
  });

  constructor() {

  }

  ngOnInit(): void {

  }

  handleSubmit() {
    this.contactFormUnTyped.value.hello
    console.log(this.contactForm.value)
    //console.log(this.contactForm.value.hello)
    // this.contactForm.value.phoneNo=12121;
  }

  handleClear(){
    console.log('Before reset value');
    console.log(this.contactForm.value);
    this.contactForm.reset();
    console.log('After reset value');
    console.log(this.contactForm.value);
  }

}
