import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-venue',
	templateUrl: './venue.component.html',
	styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
	title: string = 'My first AGM project';

	bendooley_lat: number = -34.469108;
	bendooley_lng: number = 150.3606354;
	rift_lat: number = -34.4773958;
	rift_lng: number = 150.4349801;
	royal_lat: number = -34.4794119;
	royal_lng: number = 150.418366;
	constructor() { }

	ngOnInit() {
	}

}
