import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSharesComponent } from './components/add-shares/add-shares.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { SharesComponent } from './components/shares/shares.component';
import { UpdatesharesComponent } from './components/updateshares/updateshares.component';

const routes: Routes = [
  {path:'', pathMatch:'full',component:LoginComponent},
  {path:'shares/update/:id',component:UpdatesharesComponent},
  {path:'shares/add',component:AddSharesComponent},
  {path:'shares',component:SharesComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'logins',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
