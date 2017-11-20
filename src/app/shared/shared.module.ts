import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
exports:[
    FormsModule,
    HttpModule,
    CommonModule,
    MaterialModule
]
})
export class SharedModule {}