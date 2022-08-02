import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: string;
  email!: string;
  password!: string;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){

    console.log(this.name+", "+this.email+", "+this.password);
  
  
  
    const userObj ={
  
      "name":this.name,
  
      "email":this.email,
  
      "password":this.password
  
    };
  
    console.log(userObj);
  
    alert("Successfully Registered")
  
    this.router.navigateByUrl("/login")
  
  }
 

}
