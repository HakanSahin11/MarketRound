import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-item', component: NewItemComponent},

  // if nothing is found redirect to home 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, NewItemComponent]
