import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginContainerComponent } from './MyComponents/login-container/login-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginContainerComponent },
  { path: 'signup', component: LoginContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
