import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }


  logout(){
  
  var confirmLogout = confirm("are you sure you want to logOut");

    if(confirmLogout==true){
      this.service.onLogout();
      this.router.navigate(['login']);
    }
    else{
      return ;
    }
    
  }


}
