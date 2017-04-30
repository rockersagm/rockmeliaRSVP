import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import { AuthService }      	from '../auth.service';
import { SFService }          	from '../sf.service';
import { Family, Contact }      from '../Family';

import * as moment from 'moment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	family : Family;
	daysToGo : string;

	constructor(private router: Router,
				public authService: AuthService,
				private sfService: SFService) {
	}

	ngOnInit() {
		var wedding = moment("2017-10-28");
		var now = moment();
		this.daysToGo =  (wedding.diff(now, 'days')+1).toString();
		this.family = this.sfService.loadData();
	}

	gotoLogout() {
		this.authService.logout();
		this.router.navigate(['/login']);
	}

}
