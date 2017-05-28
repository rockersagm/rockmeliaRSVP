import { Component, OnInit, ViewChild, ElementRef} 		from '@angular/core';
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
  	loginText: string = 'Login';

 	@ViewChild('loginField')loginField: ElementRef;
 	@ViewChild('postcodeField')postcodeField: ElementRef;
 	@ViewChild('loginButton')loginButton: ElementRef;
 	@ViewChild('spinner')spinner: ElementRef;

	constructor(public authService: AuthService,
				private router: Router) {
		console.log('login component constructing');

	}

	keyPressed(event) {
	  if(event.keyCode == 13) {
	    this.doLogin();
	  }
	}

	doLogin() {
		this.loginField.nativeElement.disabled = true;
		this.postcodeField.nativeElement.disabled = true;
		this.loginButton.nativeElement.disabled = true;
		this.spinner.nativeElement.style.display = 'inline-block';
		this.loginText = 'Logging in...';
		this.message ='';

		console.log("login request loginCode=["+this.loginCode+"] postcode=["+this.postcode+"]");


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
			else {
				this.loginField.nativeElement.disabled = false;
				this.postcodeField.nativeElement.disabled = false;
				this.loginButton.nativeElement.disabled = false;
				this.loginText = 'Login';
				this.spinner.nativeElement.style.display = 'none';
			}
		});


	}

	doLogout() {
		this.authService.logout();
	}

	ngOnInit() {
	}

}
