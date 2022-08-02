import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  edituser ={
    id:10,
    name:"prudhvi",
    email:"wru@gmail.com"
  };
  updateuser(){
    alert("successfully upadte");

    this.router.navigateByurl('/edituser')
  }

}
