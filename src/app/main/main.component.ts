	//TODO add animations https://angular.io/docs/ts/latest/guide/animations.html

import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import { DialogService }  		from '../dialog.service';
import { AuthService }      	from '../auth.service';
import { SFService }          	from '../sf.service';
import { Family, Contact }      from '../Family';

import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	pendingChanges :boolean = true;
	family : Family;

	constructor(private router: Router,
				public authService: AuthService,
				public dialogService: DialogService,
				private sfService: SFService) {

		console.log('MainComponent constructor =' + this.sfService.loadData());

	}

	ngOnInit() {
		this.family = this.sfService.loadData();


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
