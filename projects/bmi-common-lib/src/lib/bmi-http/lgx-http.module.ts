import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: []
})
export class LgxHttpModule { }
