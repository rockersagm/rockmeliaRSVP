import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Family, Contact }          from './Family';

import '../js/ua-parser.min.js';

import { environment } from '../environments/environment';
declare const UAParser: any;

@Injectable()
export class SFService {

	family : Family;
	audit : Audit;

	constructor(private http: Http) {
	}

	public getDetails() {

		this.http.get('//freegeoip.net/json/')
					.map((data) => this.extractIPData(data)).subscribe();
	}

	private extractIPData(res: Response) {

		let body = res.json();
		if(!body.error) {
			this.audit = body;
		}

		//parse the user agent details
		var parser = new UAParser();
		var result = parser.getResult();
	    console.log(result);

    	this.audit.browser = result.browser.name;
    	this.audit.browserVersion = result.browser.version;
		this.audit.cpuType = result.cpu.architecture;
		this.audit.deviceModel = result.device.model;
		this.audit.deviceType = result.device.type;
		this.audit.deviceVendor = result.device.vendor;
		this.audit.osName = result.os.name;
		this.audit.osVersion = result.os.version;

		return body;

	}

	login(loginCode: String, postalCode: String) : Observable<any> {

		let url = "https://rockmelia-cors-anywhere.herokuapp.com/https://rockmelia-developer-edition.ap2.force.com/";
		let headers = new Headers();
		headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Content-Type','text/plain');

		if(this.audit!=undefined) {
			headers.append('audit-IP', this.audit.ip);
			headers.append('audit-CountryName', this.audit.country_name);
			headers.append('audit-RegionName', this.audit.region_name);
			headers.append('audit-Lat', this.audit.latitude);
			headers.append('audit-Long', this.audit.longitude);
			headers.append('audit-Timezone', this.audit.time_zone);
			headers.append('audit-Postcode', this.audit.zip_code);
			headers.append('audit-browser', this.audit.browser);
			headers.append('audit-browserVersion', this.audit.browserVersion);
			headers.append('audit-cpuType', this.audit.cpuType);
			headers.append('audit-deviceModel', this.audit.deviceModel);
			headers.append('audit-deviceType', this.audit.deviceType);
			headers.append('audit-deviceVendor', this.audit.deviceVendor);
			headers.append('audit-osName', this.audit.osName);
			headers.append('audit-osVersion', this.audit.osVersion);
		}

		let options = new RequestOptions({ headers: headers });
		console.log(headers);
		console.log(options);


		return this.http.get(url + "login?loginCode="+loginCode+"&postalcode="+postalCode, options)
						.map((data) => this.extractData(data))
						.catch(this.handleError);
	}

	private extractData(res: Response) {

		let body = res.json();
		console.log(body);
		if(body.error) {
			return body.error;
		}
		else {
			this.family = body;
			this.family.Contacts = body.Contacts.records;

			return "Success";
		}

	}

	public loadData() : Family {

		//TEMP - DELETE THIS************************************************
		if (!environment.production && this.family==undefined) {
			//*************  HARD CODE FOR TESTING PURPOSES **********
			let c1 = new Contact("0032800000gZ07FAAS",
								"Andrew Manetakis",
						        true, //Dairy_Free__c:
						        true, //Gluten_Free__c:
						        "3025", //Guest_ID__c:
						        true, //Vegetarian__c:
						        true, //Nut_Free__c:
						        'something wierd', //Other_Dietry_Requirements__c
						        "Yes", //RSVP_Ceremony__c:
						        "No", //RSVP_Friday_Night__c:
						        "No Response", //RSVP_Reception__c:
						        "No Response", //RSVP_Sunday_Brunch__c:
						        "Andrew", //FirstName
   						        "", //Song__c
   						        "", //Guest_Notes__c
			        			);

			let c2 = new Contact("0032800000gZ07FAAS",
								"Amelia Hill-Scott",
						        false, //Dairy_Free__c:
						        false, //Gluten_Free__c:
						        "8280", //Guest_ID__c:
						        true, //Vegetarian__c:
						        false, //Nut_Free__c:
						        "nope", //Other_Dietry_Requirements__c
						        "No Response", //RSVP_Ceremony__c:
						        "No", //RSVP_Friday_Night__c:
						        "", //RSVP_Reception__c:
						        "Yes", //RSVP_Sunday_Brunch__c:
						        "Amelia", //FirstName
   						        "", //Song__c
   						        "", //Guest_Notes__c
   						        );

			this.family = new Family("00128000010XWpBAAW",
									 "Andrew & Amelia",
									 "1400",
									 [c1,c2]);
		}
		//END TTEMP*************************************************************

		return this.family;
	}

	submitRSVP(familyId : string, guestID : string, event : string, rsvp : string) : Observable<any> {
		let url = "https://rockmelia-cors-anywhere.herokuapp.com/https://rockmelia-developer-edition.ap2.force.com/";
		let headers = new Headers();
		headers.append('Content-Type','text/plain');
		let options = new RequestOptions({ headers: headers });

		console.log('submitRSVP');
		return this.http.get(url + "rsvp?guestId="+guestID+"&event="+event+"&rsvp="+rsvp+"&familyId="+familyId, options)
						.map((data) => this.extractData(data))
						.catch(this.handleError);
	}


	changeDietary(familyId : string, guestID : string, vegetarian : string, glutenFree : string, dairyFree : string, nutFree : string, other : string, notes: string) : Observable<any> {
		let url = "https://rockmelia-cors-anywhere.herokuapp.com/https://rockmelia-developer-edition.ap2.force.com/";
		let headers = new Headers();
		headers.append('Content-Type','text/plain');
		let options = new RequestOptions({ headers: headers });

		console.log('removeDietary');
		return this.http.get(url + "dietary?guestId="+guestID
								+"&vegetarian="+vegetarian
								+"&glutenFree="+glutenFree
								+"&dairyFree="+dairyFree
								+"&nutFree="+nutFree
								+"&other="+other
								+"&notes="+notes
								+"&familyId="+familyId
								, options)
						.map((data) => this.extractData(data))
						.catch(this.handleError);
	}


	updateGuestField(familyId : string, guestID : string, fieldName : string, value : string) : Observable<any> {
		let url = "https://rockmelia-cors-anywhere.herokuapp.com/https://rockmelia-developer-edition.ap2.force.com/";
		let headers = new Headers();
		headers.append('Content-Type','text/plain');
		let options = new RequestOptions({ headers: headers });

		console.log('removeDietary');
		return this.http.get(url + "updateGuestField?guestId="+guestID+"&fieldName="+fieldName+"&value="+value+"&familyId="+familyId, options)
						.map((data) => this.extractData(data))
						.catch(this.handleError);
	}

	private handleError (error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}


}

class Audit {

	browser: string;
	browserVersion: string;
	cpuType: string;
	deviceModel: string;
	deviceType: string;
	deviceVendor: string;
	osName: string;
	osVersion: string;

	constructor(	public ip: string,
  					public country_name: string,
  					public region_name: string,
  					public latitude: string,
  					public longitude: string,
  					public time_zone: string,
  					public zip_code: string
  				) { }
}
