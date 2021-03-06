import { Injectable } 		from '@angular/core';
import { Http, Response, Headers, RequestOptions }   from '@angular/http';

import { Observable } 		from 'rxjs/Observable';
import { SFService }          from './sf.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	private isLoggedIn: boolean = false;

	// store the URL so we can redirect after logging in
	redirectUrl: string;

	constructor (private http: Http, private sfService: SFService) {

	}

	login(loginCode: String, postalCode: String): Observable<any> {
		return this.sfService.login(loginCode, postalCode)
								.map(val => {
									if(val=="Success") {
										this.isLoggedIn = true;
										sessionStorage.setItem('loggedIn', 'true');
									}
									return val;
								});
	}

	logout(): void {
  		this.isLoggedIn = false;
  		sessionStorage.setItem('loggedIn', 'false');

  	}

  	public getIsLoggedIn() : boolean {
  		return sessionStorage.getItem('loggedIn') === 'true';
  	}
}
