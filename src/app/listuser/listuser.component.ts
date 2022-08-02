import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
listuser= [
  {id:10, name:"prudhvi", email:"wer@gmail.com"},
  {id:101, name:"bhavya", email:"qrt@gmail.com"},
  {id:20, name:"chand", email:"asd@gmail.com"},
];
tasks = [
  {id:1, name:"Install java", status:"completed"},
  {id:2, name:"Instaqll nodejs", status:"pending"},
]
deleteuser(){
  alert("successfully deleted");
}
}
