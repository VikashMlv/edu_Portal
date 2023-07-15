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



  public frmSwitch:boolean = true;


  regsiterSwitch() {
    if (this.frmSwitch == true) {
      this.frmSwitch = false;

    }

    else {
      this.frmSwitch = true;
    }

  }

  //user id and password capturing

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })




  //Sign Up Form Values Capturing 
  signUpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    avatar: new FormControl('')
  })




  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {

  }


  //onLogin process

  onLogin() {
    this.auth.onLogin(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem("token", res.access_token);
      this.router.navigate(['/dashboard']);
    })

  }



  //SignUp Process

  onSignUp() {
  
   this.auth.onRegister(this.signUpForm.value).subscribe((res:any)=>{
   alert(res.message);

   })

  }



}
