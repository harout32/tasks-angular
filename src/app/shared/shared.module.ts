import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[
        NgbModule.forRoot()
    ],
exports:[
    NgbModule,
    CommonModule,
    FormsModule
]
}) 

export class SharedModule {}