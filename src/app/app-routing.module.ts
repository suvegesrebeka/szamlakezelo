import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { CreateComponent } from './components/create/create.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CheckComponent } from './components/check/check.component';
import { UniqueComponent } from './components/unique/unique.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent,children: [
    {path: 'subscription', component: SubscriptionComponent},
    {path: 'create', component: CreateComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'check', component: CheckComponent},
    {path: 'unique', component: UniqueComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
