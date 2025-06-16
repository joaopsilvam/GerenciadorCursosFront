import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculasRoutingModule } from './matriculas-routing.module';
import { MatriculasComponent } from './matriculas.component';
import { ListarComponent } from './pages/listar/listar.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    MatriculasComponent,
    ListarComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    MatriculasRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MatriculasModule { }
