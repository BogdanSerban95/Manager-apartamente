import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ApartamenteComponent } from '../apartamente/apartamente.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetaliiComponent } from '../detalii/detalii.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'apartamente', component: ApartamenteComponent },
  { path: 'detalii/:id', component: DetaliiComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
