import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WelcomDataService } from '../service/data/welcom-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;

  constructor(private ser: WelcomDataService, private router: Router) { }

  ngOnInit() {
  }
  isLoginMode = true;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(fo: NgForm){
    // console.log(fo);
    // console.log(fo.value.username );
    // console.log(fo.value.password);
   this.username = fo.value.username;
    this.router.navigate(['home',this.username])
  }

}
