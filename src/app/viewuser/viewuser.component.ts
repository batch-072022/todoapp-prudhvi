import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewuser = {id:10, name:"prudhvi", email:"wer@gmail.com"};
deleteuser(){
  alert("successfully deleted");
}

}

