import { CommonModule }   from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
	declarations: [
		MainComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		MainRoutingModule
	]
})

export class MainModule { }
