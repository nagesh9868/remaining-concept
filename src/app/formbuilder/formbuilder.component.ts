import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  constructor(private formBuilder:FormBuilder) { }

  FB = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email:['',[Validators.required, Validators.email, Validators.minLength(5)]],
    number:['',[Validators.required, Validators.minLength(10)]],
    password:['',[Validators.required, Validators.minLength(8),Validators.pattern('[a-zA-Z0-9]*')]]
  })
  ngOnInit(): void {
  }

  formData(){
    console.table(this.FB.value);   
  }

  getValue(){
    let name = this.FB.get('name')?.value
    let email = this.FB.get('email')?.value
    let number = this.FB.get('number')?.value
    console.log(name,email,number);
  }
  // setValue(){
  //   this.FB.setValue({
  //     name: "Nageshwar Sharma",
  //     email: "nagesh@test.com",
  //     number: '8765432567',
  //     password: "qwer2023"
  //   })
  // }
  setValue(){
    this.FB.setValue({
      name: "",
      email: "",
      number: '',
      password: ""
    })
  }
  patchValue(){
    this.FB.patchValue({
      // userName: "Nageshwar Sharma",
      password: "nagesh@test.com",
    })
  }

  loginForm:any = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })

  loginFormData(){
    console.log(this.loginForm.value);
  }
  

  loginData(data:any){
    console.log(data);    
  }
  
}


