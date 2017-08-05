import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import { AuthService }      	from '../auth.service';
import { Family, Contact }      from '../Family';
import { Observable } 			from 'rxjs/Rx';
import { SFService }          	from '../sf.service';

import * as moment from 'moment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	public daysToGo : string;
	public hoursToGo : string;
	public minsToGo : string;
	public secsToGo : string;
	public family : Family;
  	isCollapsed = true;

	constructor(private router: Router,
				private authService: AuthService,
				private sfService: SFService) {
		this.family = new Family('', '','', [] );
	}

	ngOnInit() {
		//this.family = this.sfService.loadData();
		this.sfService.refreshFamily().subscribe(
			(data) => {
				this.family = this.sfService.loadData();
			}

		);
		//run timer update every second
		Observable.interval(1000)
					.startWith(0)
					.subscribe(x => {
 						this.updateCounter();
	  				});
	}

	collapse() {
		//console.log('collapsing');
		//document.getElementById('navbarToggler').collapse('hide');
	}

	  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }


	//calculate the countdown to the ceremony
	updateCounter() {
		let wedding = moment("2017-10-28 16:15+11");
		let now = moment();
		let days = wedding.diff(now, 'days');
		let hours = wedding.diff(now, 'hours');
		let mins =  wedding.diff(now, 'minutes');
		let secs = wedding.diff(now, 'seconds');

		this.daysToGo = days.toString();
		this.hoursToGo = (hours - (days * 24) ).toString();
		this.minsToGo = (mins - (hours * 60) ).toString();
		this.secsToGo = ( secs - (mins * 60) ).toString();

		this.family.Name = this.family.Name;
	}

	gotoLogout() {
		this.authService.logout();
		this.router.navigate(['/login']);
	}

}
