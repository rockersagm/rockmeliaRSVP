import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Family }          from './Family';


@Injectable()
export class SFService {

	family : Family;

	constructor(private http: Http) {
	}

	login(loginCode: String, postalCode: String) : Observable<any> {

		let url = "https://rockmelia-cors-anywhere.herokuapp.com/https://rockmelia-developer-edition.ap2.force.com/";
		let headers = new Headers();
		headers.append('X-Requested-With', 'XMLHttpRequest');

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
			console.log('extractData.family.Family_Id__c='+this.family.Family_Id__c);
			console.log('extractData.family.Id='+this.family.Id);
			console.log('extractData.family.Contacts[0].Name='+this.family.Contacts[0].Name);

			return "Success";
		}

	}

	public loadData() : Family {
		return this.family;
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
