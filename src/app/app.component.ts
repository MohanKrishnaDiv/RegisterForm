import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router,  } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegisterForm';
  GivenLabel="";
  GivenValue="";
  submittedData:any;
  

 registerDetails = new FormGroup({
      Firstname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(256)]),
      Lastname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(256)]),
      Username: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z][a-zA-Z0-9_-]+$")]),
      Age : new FormControl('',[Validators.required,Validators.min(1),Validators.max(999),Validators.pattern("[0-9]+$")]),
      Email : new FormControl('',[Validators.required,Validators.email]),
      Phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]+")]),
      AdditionalInfo : new FormControl('',[Validators.required])

    })

  getFromChild(event:string){
    this.GivenValue=event;
  }


  get Firstname(){
    return this.registerDetails.get("Firstname")
  }
  get Lastname(){
    return this.registerDetails.get("Lastname")
  }
  get Username(){
    return this.registerDetails.get("Username")
  }
  get Age(){
    return this.registerDetails.get("Age")
  }
  get Email(){
    return this.registerDetails.get("Email")
  }
  get Phone(){
    return this.registerDetails.get("Phone")
  }
  get AdditionalInfo(){
    return this.registerDetails.get("AdditionalInfo")
  }

  constructor(private router: Router){}
  onSubmit(){
    console.log(this.registerDetails);
    this.submittedData = this.registerDetails.value; 
    this.router.navigate(['display-component'],{
      state: { submittedData : this.submittedData, AdditionalValue : this.GivenValue }
    })
  }
}
