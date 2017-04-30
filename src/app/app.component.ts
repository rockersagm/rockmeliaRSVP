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
					#rockmelia RSVP Website 2017
					<a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact </a>
					<router-outlet name="popup"></router-outlet>
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

		.footer {
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			padding: .3rem;
			background-color: #efefef;
			text-align: center;

		}

		.footer-text {
			 font-size: 0.8em;
			 margin:0px;
			 padding:0px;
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
