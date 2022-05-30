import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  customerForm!: FormGroup;
  pass: string ="";
  cnfpass: string = "";


  constructor(private customerService:CustomerService,
    private router:Router, private eleref: ElementRef)  { }


  ngOnInit(): void {
    this.customerForm=new FormGroup({
      userName:new FormControl(),
      
      password:new FormControl(),
      confirmPassword:new FormControl(),
      firstName:new FormControl(),
      lastName:new FormControl(),
      phoneNo:new FormControl(),
      address: new FormControl(),
      emailId:new FormControl()
    });
  }
onSubmit(form:NgForm)
{
  if(this.checkPass()){
    this.customerService.add(form).subscribe(result=>{
      alert('Form Submit');
      console.log(result);
      this.router.navigate(['/logins']);
    }, err=>{
      alert('Failed');
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

export class BusinessOwnerRegistrationComponent implements OnInit {

  customerForm!: FormGroup;
  pass: string ="";
  cnfpass: string = "";


  constructor(private businessownerService:BusinessOwnerService,
    private router:Router, private eleref: ElementRef)  { }


  ngOnInit(): void {
    this.customerForm=new FormGroup({
      userName:new FormControl(),
      
      password:new FormControl(),
      confirmPassword:new FormControl(),
      firstName:new FormControl(),
      lastName:new FormControl(),
      phoneNo:new FormControl(),
      address: new FormControl(),
      emailId:new FormControl()
    });
  }
onSubmit(form:NgForm)
{
  if(this.checkPass()){
    this.BusinessOwnerService.add(form).subscribe(result=>{
      alert('Form Submit');
      console.log(result);
      this.router.navigate(['/logins']);
    }, err=>{
      alert('Failed');
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
