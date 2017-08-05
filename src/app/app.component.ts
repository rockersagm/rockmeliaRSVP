import { Component } from '@angular/core';
import { SFService }          from './sf.service';

//declare	var parser: any;

@Component({
	selector: 'app-root',
	template: `

		<div class="container-fluid app-div">
			<router-outlet></router-outlet>

			<div class="footer">
				<p class="footer-text">
					#rockmelia RSVP Website 2017 | Designed by #rockmelia | Made by Andrew Manetakis
				</p>
			</div>

		</div>
	`,
	styles: [`

		.app-div {
			border-style: none;
			position: relative;
		 	margin: 0;
		 	padding:0px;
		  	padding-bottom: 3rem;
		  	min-height: 100%;
		  	background-color:white;
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
