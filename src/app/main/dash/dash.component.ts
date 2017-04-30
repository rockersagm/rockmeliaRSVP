import { Component, OnInit } from '@angular/core';
import { Family }      from '../../Family';
import { SFService }          	from '../../sf.service';

@Component({
	selector: 'app-dash',
	templateUrl: './dash.component.html',
	styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
	family : Family;

	constructor(private sfService: SFService) { }

	ngOnInit() {
		this.family = this.sfService.loadData();
	}

}
