import { Component } from '@angular/core';
import { SFService }          from './sf.service';

//declare	var parser: any;

@Component({
	selector: 'app-root',
	template: `

	<!--
		<ngb-alert>
			Random Message
		</ngb-alert>
	-->

	<div class="container-fluid app-div">



		<!--nav>
			<a routerLink="">Login</a>
			<a routerLink="main">Main</a>
		</nav-->

		<router-outlet></router-outlet>
	</div>

	<a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact </a>
	<router-outlet name="popup"></router-outlet>

	`,
	styles: [`
	.app-div {
		border-style: none;
		background-color: red;

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
