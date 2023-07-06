import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//user id and password capturing

 loginForm = new FormGroup ({
  email : new FormControl(''),
  password:new FormControl('')
 })


 
  
  constructor(private auth:AuthServiceService,private router:Router) {  }

  ngOnInit(): void {
    
  }

 onLogin(){
 this.auth.onLogin(this.loginForm.value).subscribe((res:any)=>{
console.log(res);
 localStorage.setItem("token",res.access_token);
this.router.navigate(['/dashboard']);
 })

 }

 

}
