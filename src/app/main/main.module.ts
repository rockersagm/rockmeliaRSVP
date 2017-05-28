import { CommonModule }   from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { VenueComponent } from './venue/venue.component';
import { DashComponent } from './dash/dash.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GiftsComponent } from './gifts/gifts.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		MainComponent,
		VenueComponent,
		DashComponent,
		RsvpComponent,
		GiftsComponent
	],
	imports: [
	NgbModule.forRoot(),
		CommonModule,
		FormsModule,
		MainRoutingModule
	],
	providers: [
	]
})

export class MainModule { }
