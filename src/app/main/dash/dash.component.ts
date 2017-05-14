import { Component, OnInit } from '@angular/core';
import { Family }      from '../../Family';
import { SFService }          	from '../../sf.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-dash',
	templateUrl: './dash.component.html',
	styleUrls: ['./dash.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers

})
export class DashComponent implements OnInit {
	family : Family;

	constructor(private sfService: SFService,
				config: NgbCarouselConfig) {
    	// customize default values of carousels used by this component tree
	    config.interval = 5000;
	    config.wrap = true;
	    config.keyboard = false;
	}

	ngOnInit() {
		this.family = this.sfService.loadData();
	}

}
