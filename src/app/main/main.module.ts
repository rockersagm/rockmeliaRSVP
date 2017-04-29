import { CommonModule }   from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		MainComponent
	],
	imports: [
		NgbModule,
		CommonModule,
		FormsModule,
		MainRoutingModule
	]
})

export class MainModule { }
