	//TODO add animations https://angular.io/docs/ts/latest/guide/animations.html

import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import { DialogService }  		from '../dialog.service';
import { AuthService }      	from '../auth.service';
import { SFService }          	from '../sf.service';
import { Family, Contact }      from '../Family';

import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import * as moment from 'moment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	pendingChanges :boolean = true;
	family : Family;
	daysToGo : string;

	constructor(private router: Router,
				public authService: AuthService,
				public dialogService: DialogService,
				private sfService: SFService) {

		console.log('MainComponent constructor =' + this.sfService.loadData());

	}

	onRSVP(guestId, event, rsvp) {
		console.log('onRSVP clicked guestId='+guestId+' event=' + event + ' rsvp='+rsvp);


		this.sfService.submitRSVP(this.family.Id, guestId, event, rsvp).subscribe((val) => {
			console.log('submit complete val='+val);
			this.family = this.sfService.loadData();

		});
	}

  onClick(value){
  	//	this.family.Contacts[0].RSVP_Friday_Night__c = 'Yes';
    console.log(value);
  }

	ngOnInit() {

		var wedding = moment("2017-10-28");
		var now = moment();
		this.daysToGo =  (wedding.diff(now, 'days')+1).toString();
		this.family = this.sfService.loadData();

		//TEMP - DELETE THIS************************************************
		if (!environment.production) {
			//*************  HARD CODE FOR TESTING PURPOSES **********
			let c1 = new Contact("0032800000gZ07FAAS",
								"Andrew Manetakis",
						        false, //Dairy_Free__c:
						        false, //Gluten_Free__c:
						        "3025", //Guest_ID__c:
						        false, //Vegetarian__c:
						        false, //Nut_Free__c:
						        "Yes", //RSVP_Ceremony__c:
						        "No", //RSVP_Friday_Night__c:
						        "No Response", //RSVP_Reception__c:
						        "No Response" //RSVP_Sunday_Brunch__c:
			        			);

			let c2 = new Contact("0032800000gZ07FAAS",
								"Amelia Hill-Scott",
						        false, //Dairy_Free__c:
						        false, //Gluten_Free__c:
						        "8280", //Guest_ID__c:
						        true, //Vegetarian__c:
						        false, //Nut_Free__c:
						        "No Response", //RSVP_Ceremony__c:
						        "No", //RSVP_Friday_Night__c:
						        "", //RSVP_Reception__c:
						        "Yes" //RSVP_Sunday_Brunch__c:
			        			);

			this.family = new Family("00128000010XWpBAAW",
									 "Andrew & Amelia",
									 "1400",
									 [c1,c2]);
		}
		//END TTEMP*************************************************************

	}

	gotoLogout() {
		this.authService.logout();
		this.router.navigate(['/login']);
	}

	canDeactivate(): Promise<boolean> | boolean {
		// Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
		if (!this.pendingChanges) {
			return true;
		}
		// Otherwise ask the user with the dialog service and return its
		// promise which resolves to true or false when the user decides
		return this.dialogService.confirm('Discard changes?');
	}

}
