import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public route:Router, private fb:FormBuilder,private tostr:ToastrService) { 
    this.loginForm = fb.group({
      userName:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  }

  login(){
if(this.loginForm.get('userName')?.value == "Admin" && this.loginForm.get("password")?.value == "Admin123"){
  this.route.navigate(['./master'])
  this.tostr.success("Login successfull !!!")
}else{
  this.tostr.warning("Please Fill Correct Form")
}

  }

}
