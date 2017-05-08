import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import { AuthService }      	from '../auth.service';
import { SFService }          	from '../sf.service';
import { Family, Contact }      from '../Family';

import * as moment from 'moment';
import {Observable} from 'rxjs/Rx';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	family : Family;
	daysToGo : string;
	hoursToGo : string;
	minsToGo : string;
	secsToGo : string;

	constructor(private router: Router,
				public authService: AuthService,
				private sfService: SFService) {
	}

	ngOnInit() {
		this.family = this.sfService.loadData();
		Observable.interval(1000)
					.startWith(0)
					.subscribe(x => {
 						this.updateCounter();
	  				});
	}


	//TODO: make more efficient
	updateCounter() {
		var wedding = moment("2017-10-28 16:00");
		var now = moment();
		this.daysToGo =  (wedding.diff(now, 'days')).toString();
		this.hoursToGo =  ( wedding.diff(now, 'hours') - (wedding.diff(now, 'days') * 24) ).toString();
		this.minsToGo = ( wedding.diff(now, 'minutes') - (wedding.diff(now, 'hours') * 60) ).toString();
		this.secsToGo = ( wedding.diff(now, 'seconds') - (wedding.diff(now, 'minutes') * 60) ).toString();
	}

	gotoLogout() {
		this.authService.logout();
		this.router.navigate(['/login']);
	}

}
