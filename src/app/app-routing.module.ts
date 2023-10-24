import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '**', redirectTo: '/home'},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'loading', component: LoadingComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
