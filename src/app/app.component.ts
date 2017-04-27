import { Component } from '@angular/core';
import { SFService }          from './sf.service';

//declare	var parser: any;

@Component({
	selector: 'app-root',
	template: `
	<div class="app-div">

			<a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
			<router-outlet name="popup"></router-outlet>


			<h3>app component</h3>
			<!--nav>
				<a routerLink="">Login</a>
				<a routerLink="main">Main</a>
			</nav-->
	</div>

	<router-outlet></router-outlet>

	<iframe src="https://rockmelia-developer-edition.ap2.force.com/login?loginCode=1400&postalcode=2017">
	</iframe>

	`,
	styles: [`
	.app-div {
		border-style: double;
		background-color: yellow;
	}

	`
	]
})
export class AppComponent {

	constructor(private sfService: SFService) {

		//get user's ip and other info
		sfService.getDetails();

		//this.uaParser = new UAParser();

	}
}
