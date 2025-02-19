import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'table', component: DataTableComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
