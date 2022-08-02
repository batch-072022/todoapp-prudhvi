import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'viewuser', component:ViewuserComponent},
  {path:'edituser', component:EdituserComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
