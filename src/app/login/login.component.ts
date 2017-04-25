import { Component, OnInit } 		from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService }      		from '../auth.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	loginCode: string;
	postcode: string;
  	message: string;

	constructor(public authService: AuthService,
				private router: Router) {
		console.log('login component constructing');

	}

	doLogin() {
		console.log("login request loginCode=["+this.loginCode+"] postcode=["+this.postcode+"]");

		this.message = 'Trying to log in ...';

		this.authService.login(this.loginCode, this.postcode).subscribe((val) => {
			this.message = val;
			if (this.authService.isLoggedIn) {
				// Get the redirect URL from our auth service
				// If no redirect has been set, use the default
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main';

				// Set our navigation extras object
				// that passes on our global query params and fragment
				let navigationExtras: NavigationExtras = {
					preserveQueryParams: true,
					preserveFragment: true
				};
				console.log("logged in. redirect=["+redirect+"]");

				// Redirect the user
				this.router.navigate([redirect], navigationExtras);
			}
		});


	}

	doLogout() {
		this.authService.logout();
	}

	ngOnInit() {
	}

}
