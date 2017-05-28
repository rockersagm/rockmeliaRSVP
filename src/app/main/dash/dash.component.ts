import { Component, OnInit } from '@angular/core';
import { Family }      from '../../Family';
import { CarouselImage }      from './CarouselImage';

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
	imageList : CarouselImage[] = [];

	constructor(private sfService: SFService,
				config: NgbCarouselConfig
				) {
    	// customize default values of carousels used by this component tree
	    config.interval = 3000;
	    config.wrap = true;
	    config.keyboard = false;


	}

	ngOnInit() {
		this.family = this.sfService.loadData();


		//Need to have >150 photos to get rid of the horizontal selection bar on the image.
		//TODO: get more photos then remove the silly FOR loop
		let totalImages = 3;
		for(let i = 1; i <= totalImages; i++) {
			this.imageList.push(new CarouselImage("image1.JPG", "Hawaii", "Sept 2015"));
			this.imageList.push(new CarouselImage("image2.JPG", "Napa Valley", "Sept 2015"));
			this.imageList.push(new CarouselImage("image3.JPG", "Xmas", "Dec 2015"));
			this.imageList.push(new CarouselImage("image4.JPG", "image4.JPG", "image4.JPG"));
			this.imageList.push(new CarouselImage("image5.JPG", "image5.JPG", "image5.JPG"));
			this.imageList.push(new CarouselImage("image6.JPG", "Valentine's Day @ Tropfest", "Feb 2016"));
			this.imageList.push(new CarouselImage("image7.JPG", "image7.JPG", "image7.JPG"));
			this.imageList.push(new CarouselImage("image8.JPG", "image8.JPG", "image8.JPG"));
			this.imageList.push(new CarouselImage("image9.JPG", "image9.JPG", "image9.JPG"));
			this.imageList.push(new CarouselImage("image10.JPG", "image10.JPG", "image10.JPG"));
			this.imageList.push(new CarouselImage("image11.JPG", "image11.JPG", "image11.JPG"));
			this.imageList.push(new CarouselImage("image12.JPG", "image12.JPG", "image12.JPG"));
			this.imageList.push(new CarouselImage("image13.JPG", "image13.JPG", "image13.JPG"));
			this.imageList.push(new CarouselImage("image14.JPG", "Engagement", "June 2016"));
			this.imageList.push(new CarouselImage("image15.JPG", "image15.JPG", "image15.JPG"));
			this.imageList.push(new CarouselImage("image16.JPG", "image1.JPG", "image1.JPG"));
			this.imageList.push(new CarouselImage("image17.JPG", "image17.JPG", "image17.JPG"));
			this.imageList.push(new CarouselImage("image18.JPG", "image18.JPG", "image18.JPG"));
			this.imageList.push(new CarouselImage("image19.JPG", "image19.JPG", "image19.JPG"));
			this.imageList.push(new CarouselImage("image20.JPG", "image20.JPG", "image20.JPG"));
			this.imageList.push(new CarouselImage("image21.JPG", "image21.JPG", "image21.JPG"));
			this.imageList.push(new CarouselImage("image22.JPG", "image22.JPG", "image22.JPG"));
			this.imageList.push(new CarouselImage("image23.JPG", "image23.JPG", "image23.JPG"));
			this.imageList.push(new CarouselImage("image24.JPG", "image24.JPG", "image24.JPG"));
			this.imageList.push(new CarouselImage("image25.JPG", "image25.JPG", "image25.JPG"));
			this.imageList.push(new CarouselImage("image26.JPG", "image26.JPG", "image26.JPG"));
			this.imageList.push(new CarouselImage("image27.JPG", "image27.JPG", "image27.JPG"));
			this.imageList.push(new CarouselImage("image28.JPG", "image28.JPG", "image28.JPG"));
			this.imageList.push(new CarouselImage("image29.JPG", "image29.JPG", "image29.JPG"));
			this.imageList.push(new CarouselImage("image30.JPG", "image30.JPG", "image30.JPG"));
			this.imageList.push(new CarouselImage("image31.JPG", "image31.JPG", "image31.JPG"));
			this.imageList.push(new CarouselImage("image32.JPG", "image32.JPG", "image32.JPG"));
			this.imageList.push(new CarouselImage("image33.JPG", "image33.JPG", "image33.JPG"));
			this.imageList.push(new CarouselImage("image34.JPG", "image34.JPG", "image34.JPG"));
			this.imageList.push(new CarouselImage("image35.JPG", "image35.JPG", "image35.JPG"));
			this.imageList.push(new CarouselImage("image36.JPG", "image36.JPG", "image36.JPG"));
			this.imageList.push(new CarouselImage("image37.JPG", "image37.JPG", "image37.JPG"));
			this.imageList.push(new CarouselImage("image38.JPG", "image38.JPG", "image38.JPG"));
			this.imageList.push(new CarouselImage("image39.JPG", "image39.JPG", "image39.JPG"));
			this.imageList.push(new CarouselImage("image40.JPG", "image40.JPG", "image40.JPG"));
			this.imageList.push(new CarouselImage("image41.JPG", "image41.JPG", "image41.JPG"));
			this.imageList.push(new CarouselImage("image42.JPG", "image42.JPG", "image42.JPG"));
			this.imageList.push(new CarouselImage("image43.JPG", "image43.JPG", "image43.JPG"));
			this.imageList.push(new CarouselImage("image44.JPG", "image44.JPG", "image44.JPG"));
			this.imageList.push(new CarouselImage("image45.JPG", "image45.JPG", "image45.JPG"));
			this.imageList.push(new CarouselImage("image46.JPG", "image46.JPG", "image46.JPG"));
			this.imageList.push(new CarouselImage("image47.JPG", "image47.JPG", "image47.JPG"));
			this.imageList.push(new CarouselImage("image48.JPG", "image48.JPG", "image48.JPG"));
			this.imageList.push(new CarouselImage("image49.JPG", "image49.JPG", "image49.JPG"));
			this.imageList.push(new CarouselImage("image50.JPG", "image50.JPG", "image50.JPG"));
			this.imageList.push(new CarouselImage("image51.JPG", "image51.JPG", "image51.JPG"));
		}
		this.shuffle(this.imageList);


	}

	shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}

}

