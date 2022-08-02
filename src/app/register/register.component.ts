import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = "prudhvi";

  isValidUser = false;
  departments = ["cse","IT","MECH","ECE"]
  onClick(){
    alert("Button clicked");
  }
 

}
