import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
	selector: 'app-venue',
	templateUrl: './venue.component.html',
	styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

	bendooley_lat: number = -34.469108;
	bendooley_lng: number = 150.3606354;
	rift_lat: number = -34.477453;
	rift_lng: number = 150.437215;
	royal_lat: number = -34.477825;
	royal_lng: number = 150.417756;

	constructor() { }

	ngOnInit() {

		var markers = {

			eve: {
				legend: '<div style="display:inline-block; v-align:center;">Wedding Eve</br>Royal Hotel</div>',
				tooltip: 'Wedding Eve - The Royal Hotel',
				position: {lat: this.royal_lat, lng: this.royal_lng},
				icon: '../../../assets/friday-icon.png'
			},
			wedding: {
				legend: '<div style="display:inline-block; v-align:center;">Wedding</br>Bendooley Estate</div>',
				tooltip: 'Wedding - Bendooley Estate',
				position: {lat: this.bendooley_lat, lng: this.bendooley_lng},
				icon: '../../../assets/saturday-icon.png'
			},
			brunch: {
				legend: '<div style="display:inline-block; v-align:center;">Recovery Brunch</br>Rift Coach House</div>',
				tooltip: 'Recovery Brunch - Rift Coach House',
				position: {lat: this.rift_lat, lng: this.rift_lng},
				icon: '../../../assets/sunday-icon.png'
			}
		};

		var mapProp = {
			center: markers['eve'].position,
			zoom: 13
		};
		var map = new google.maps.Map(document.getElementById("map"), mapProp);
		let iconSize = new google.maps.Size(35,35);
		var markerBendooley = new google.maps.Marker({
			position: markers['wedding'].position,
			title:  markers['wedding'].tooltip,
			icon: {url: markers['wedding'].icon, scaledSize: iconSize},
			map: map
		});
		var markerRift = new google.maps.Marker({
			position: markers['brunch'].position,
			title:  markers['brunch'].tooltip,
			icon:{url: markers['brunch'].icon, scaledSize: iconSize},
			map: map
		});
		var markerRoyal = new google.maps.Marker({
			position: markers['eve'].position,
			title:  markers['eve'].tooltip,
			icon: {url: markers['eve'].icon, scaledSize: iconSize},
			map: map
		});


		var legend = document.getElementById('legend');
		for (var key in markers) {
			var type = markers[key];
			var name = type.legend;
			var icon = type.icon;
			var div = document.createElement('div');
			div.innerHTML = '<img src="' + icon + '" width="35" > ' + name;
			legend.appendChild(div);
		}

		map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
	}
}
