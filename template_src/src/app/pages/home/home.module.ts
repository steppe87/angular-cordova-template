
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
/**
 * Module for the 404 page
 */
@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
    ],
    providers: [
    ],
}) export class HomeModule { }
