import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessOwnerService } from 'src/app/services/business-owner.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegistrationForm!: FormGroup;
  pass: string ="";
  cnfpass: string = "";


  constructor(private customerService:CustomerService,private businessownerService:BusinessOwnerService,
    private router:Router, private eleref: ElementRef)  { }


  ngOnInit(): void {
    this.RegistrationForm=new FormGroup({
      userName:new FormControl(Validators.required),
      
      password:new FormControl(Validators.required),
      confirmPassword:new FormControl(Validators.required),
      firstName:new FormControl(),
      lastName:new FormControl(),
      phoneNo:new FormControl(Validators.required),
      address: new FormControl(),
      emailId:new FormControl(Validators.required)
    });
  }
onSubmit(form:NgForm)
{
  if(this.checkPass()){
    this.customerService.register(form).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/logins']);
    }, err=>{
      alert('Register Failed');
      console.log(err);
    })
    this.businessownerService.register(form).subscribe(result1=>{
      console.log(result1);
      this.router.navigate(['/logins']);
    }, err=>{
      alert('Register Failed');
      console.log(err);
    })
  }else{
    alert("Passwords dosen't match");
  }
  
}

checkPass(){
  let pass = (<HTMLInputElement>document.getElementById("password")).value;

  let cpass = (<HTMLInputElement>document.getElementById("ConfirmPassword")).value;
  console.log("pass: ", pass + " == ", cpass);
  if(pass==cpass){
    return true;
  }else{
    return false;
  }
}


}