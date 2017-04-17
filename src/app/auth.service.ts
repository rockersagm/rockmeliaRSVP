import { Injectable } 		from '@angular/core';
import { Http, Response }   from '@angular/http';

import { Observable } 		from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { SFService }          from './sf.service';


@Injectable()
export class AuthService {

	isLoggedIn: boolean = false;

	// store the URL so we can redirect after logging in
	redirectUrl: string;

	constructor (	private sfService : SFService,
					private http: Http) {

	}

	login(loginCode: String, postalCode: String): Observable<boolean> {
		console.log('AuthService.login redirectUrl=['+this.redirectUrl+'] loginCode=['+loginCode+'] postalCode=['+postalCode+']');

		//try to do a username/passwor oauth flow
		this.sfService.login().subscribe(result => console.log(result));
		return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);

		//try and call a public VF page
		//return this.http.get("https://rockmelia-developer-edition.ap2.force.com/login?loginCode="+loginCode+"&postalcode="+postalCode)
        //            .map(this.extractData)
        //            .catch(this.handleError);


	}

	  private extractData(res: Response) {
		    this.isLoggedIn = true

		    let body = res.json();
		    console.log(body);
		    return body.data || { };

  }

  private handleError (error: Response | any) {
  	// In a real world app, you might use a remote logging infrastructure
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


  logout(): void {
  	console.log('AuthService.logout');
  	this.isLoggedIn = false;
  }
}
