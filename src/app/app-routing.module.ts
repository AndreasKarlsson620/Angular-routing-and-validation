import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'form', component: FormComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
