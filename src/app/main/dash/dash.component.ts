import { Component, OnInit } from '@angular/core';
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
		window.scrollTo(0,0);
		let totalImages = 2;
		for(let i = 1; i <= totalImages; i++) {
			this.imageList.push(new CarouselImage("image1.JPG", "First Anniversary Quay", "February 2015"));
			this.imageList.push(new CarouselImage("image2.JPG", "USS Arizona Hawaii", "September 2015"));
			this.imageList.push(new CarouselImage("image3.JPG", "Dole Plantation Hawaii", "September 2015"));
			this.imageList.push(new CarouselImage("image4.JPG", "Valentine's Day Trop Fest", "February 2016"));
			this.imageList.push(new CarouselImage("image5.JPG", "NGV Melbourne", "April 2016"));
			this.imageList.push(new CarouselImage("image6.JPG", "Lune Croissanterie Melbourne", "April 2016"));
			this.imageList.push(new CarouselImage("image7.JPG", "Remos Bouzoukia Sydney", "May 2016"));
			this.imageList.push(new CarouselImage("image8.JPG", "Boathouse on Blackwattle Bay", "January 2016"));
			this.imageList.push(new CarouselImage("image9.JPG", "Engagement Party", "June 2016"));
			this.imageList.push(new CarouselImage("image10.JPG", "Engagement Party", "June 2016"));
			this.imageList.push(new CarouselImage("image11.JPG", "Lunch at Manetakises", "July 2016"));
			this.imageList.push(new CarouselImage("image12.JPG", "Engagement Party", "June 2016"));
			this.imageList.push(new CarouselImage("image13.JPG", "Christmas Tree Assembly", "December 2016"));
			this.imageList.push(new CarouselImage("image14.JPG", "Mad Hatter Accenture Christmas Party", "December 2016"));
			this.imageList.push(new CarouselImage("image15.JPG", "Mad Hatter Accenture Christmas Party", "December 2016"));
			this.imageList.push(new CarouselImage("image16.JPG", "Restaurant Hubert", "December 2016"));
			this.imageList.push(new CarouselImage("image17.JPG", "Picnic at Cremorne Point", "January 2017"));
			this.imageList.push(new CarouselImage("image18.JPG", "Aperol Spritzes at Home", "February 2017"));
			this.imageList.push(new CarouselImage("image19.JPG", "Botany Bay National Park", "March 2017"));
			this.imageList.push(new CarouselImage("image20.JPG", "Walsh Bay", "March 2017"));
			this.imageList.push(new CarouselImage("image21.JPG", "Nut Picking at Mt Wilson", "March 2017"));
			this.imageList.push(new CarouselImage("image22.JPG", "Blue Mountains Botanical Gardens", "March 2017"));
			this.imageList.push(new CarouselImage("image23.JPG", "50 Best Talks Opera House", "April 2017"));
			this.imageList.push(new CarouselImage("image24.JPG", "Good Friday Greek Church", "April 2017"));
			this.imageList.push(new CarouselImage("image25.JPG", "1821 Restaurant", "April 2017"));
			this.imageList.push(new CarouselImage("image26.JPG", "Puzzles and Stripes", "April 2017"));
			this.imageList.push(new CarouselImage("image27.JPG", "Dragons v Roosters", "April 2017"));
			this.imageList.push(new CarouselImage("image28.JPG", "World of Books Puzzle", "April 2017"));
			this.imageList.push(new CarouselImage("image29.JPG", "Handpicked Wines Cellar Door", "May 2017"));
			this.imageList.push(new CarouselImage("image30.JPG", "Rose Bay", "June 2017"));
			this.imageList.push(new CarouselImage("image31.JPG", "Rose Bay", "June 2017"));
			this.imageList.push(new CarouselImage("image32.JPG", "Rose Bay", "June 2017"));
			this.imageList.push(new CarouselImage("image33.JPG", "Circular Quay", "June 2017"));
			this.imageList.push(new CarouselImage("image34.JPG", "Opera House", "June 2017"));
			this.imageList.push(new CarouselImage("image35.JPG", "Pilu Freshwater", "June 2017"));
			this.imageList.push(new CarouselImage("image36.JPG", "Pilu Freshwater", "June 2017"));
			this.imageList.push(new CarouselImage("image37.JPG", "The Modern Honolulu Hawaii", "September 2015"));
			this.imageList.push(new CarouselImage("image38.JPG", "Rombauer Estate Napa CA", "September 2015"));
			this.imageList.push(new CarouselImage("image39.JPG", "#rockmelia Christmas Tree", "December 2015"));
			this.imageList.push(new CarouselImage("image40.JPG", "NYE Broadbeach Queensland", "December 2015"));
			this.imageList.push(new CarouselImage("image41.JPG", "Salt Meat Cheese pasta making", "February 2016"));
			this.imageList.push(new CarouselImage("image42.JPG", "Valentine's Day Trop Fest", "February 2016"));
			this.imageList.push(new CarouselImage("image43.JPG", "Second Anniversary Rockpool", "February 2016"));
			this.imageList.push(new CarouselImage("image44.JPG", "Balmoral Beach", "February 2016"));
			this.imageList.push(new CarouselImage("image45.JPG", "Flying Fish Post-Proposal", "March 2016"));
			this.imageList.push(new CarouselImage("image46.JPG", "Proposal Celebration Lunch", "March 2016"));
			this.imageList.push(new CarouselImage("image47.JPG", "Shrine of Remembrance Botanical Gardens Melbourne", "April 2016"));
			this.imageList.push(new CarouselImage("image48.JPG", "Melbourne", "April 2016"));
			this.imageList.push(new CarouselImage("image49.JPG", "Engagement Party", "June 2016"));
			this.imageList.push(new CarouselImage("image50.JPG", "Engagement Party", "June 2016"));
			this.imageList.push(new CarouselImage("image51.JPG", "Engagement Party", "June 2016"));
			this.imageList.push(new CarouselImage("image52.JPG", "Ski-Prep", "August 2016"));
			this.imageList.push(new CarouselImage("image53.JPG", "Coronet Peak Queenstown NZ", "August 2016"));
			this.imageList.push(new CarouselImage("image54.JPG", "Alpine Peak Queenstown NZ", "August 2016"));
			this.imageList.push(new CarouselImage("image55.JPG", "Mt Difficulty Winery Central Otago NZ", "August 2016"));
			this.imageList.push(new CarouselImage("image56.JPG", "Queenstown Smooches NZ", "August 2016"));
			this.imageList.push(new CarouselImage("image57.JPG", "The Remarkables Queenstown NZ", "August 2016"));
			this.imageList.push(new CarouselImage("image58.JPG", "National Library of Greece Athens", "December 2016"));
			this.imageList.push(new CarouselImage("image59.JPG", "Acropolis Athens", "December 2016"));
			this.imageList.push(new CarouselImage("image60.JPG", "Acropolis Athens", "December 2016"));
			this.imageList.push(new CarouselImage("image61.JPG", "Acropolis Athens", "December 2016"));
			this.imageList.push(new CarouselImage("image62.JPG", "Acropolis Athens", "December 2016"));
			this.imageList.push(new CarouselImage("image63.JPG", "Monastiraki Athens", "December 2016"));
			this.imageList.push(new CarouselImage("image64.JPG", "A for Athens", "December 2016"));
			this.imageList.push(new CarouselImage("image65.JPG", "Turramurra", "December 2015"));
			this.imageList.push(new CarouselImage("image66.JPG", "Cafe Sydney", "June 2014"));
			this.imageList.push(new CarouselImage("image67.JPG", "Bankstown Airport", "June 2014"));
			this.imageList.push(new CarouselImage("image68.JPG", "Kensington Gardens London", "September 2014"));
			this.imageList.push(new CarouselImage("image69.JPG", "Knightsbridge London", "September 2014"));
			this.imageList.push(new CarouselImage("image70.JPG", "The Shard London", "September 2014"));
			this.imageList.push(new CarouselImage("image71.JPG", "The Ledbury London", "September 2014"));
			this.imageList.push(new CarouselImage("image72.JPG", "Temple of Apollo Cape Sounion Greece", "September 2014"));
			this.imageList.push(new CarouselImage("image73.JPG", "Island of Hydra Greece", "September 2014"));
			this.imageList.push(new CarouselImage("image74.JPG", "Island of Hydra Greece", "September 2014"));
			this.imageList.push(new CarouselImage("image75.JPG", "Island of Hydra Greece", "September 2014"));
			this.imageList.push(new CarouselImage("image76.JPG", "Acropolis Athens", "September 2014"));
			this.imageList.push(new CarouselImage("image77.JPG", "Syntagma Square Athens", "September 2014"));
			this.imageList.push(new CarouselImage("image78.JPG", "Byzantine Church Athens", "September 2014"));
			this.imageList.push(new CarouselImage("image79.JPG", "Argyros Bouzoukia Athens", "September 2014"));
			this.imageList.push(new CarouselImage("image80.JPG", "The Argyle", "November 2014"));
			this.imageList.push(new CarouselImage("image81.JPG", "Cronulla Christmas", "December 2014"));
			this.imageList.push(new CarouselImage("image82.JPG", "Cronulla Beach", "January 2015"));
			this.imageList.push(new CarouselImage("image83.JPG", "Valentine's Day Seafood Cooking Class", "February 2015"));
			this.imageList.push(new CarouselImage("image84.JPG", "First Anniversary", "February 2014"));
			this.imageList.push(new CarouselImage("image85.JPG", "The Remarkables Queenstown NZ", "August 2016"));
			this.imageList.push(new CarouselImage("image86.JPG", "Greek Wedding Sylvania", "June 2014"));
			this.imageList.push(new CarouselImage("image87.JPG", "Bastille Day La Grillade", "July 2014"));
			this.imageList.push(new CarouselImage("image88.JPG", "Sutherland2Surf", "July 2014"));
			this.imageList.push(new CarouselImage("image89.JPG", "City2Surf", "August 2014"));
			this.imageList.push(new CarouselImage("image90.JPG", "Roadtrip to Nowra", "October 2014"));
			this.imageList.push(new CarouselImage("image91.JPG", "Wharf Road Restaurant Nowra", "October 2014"));
			this.imageList.push(new CarouselImage("image92.JPG", "Wharf Road Restaurant Nowra", "October 2014"));
			this.imageList.push(new CarouselImage("image93.JPG", "Berry Hotel", "October 2014"));
			this.imageList.push(new CarouselImage("image94.JPG", "Wedding Terrara House Estate", "November 2014"));
			this.imageList.push(new CarouselImage("image95.JPG", "Wedding Terrara House Estate", "November 2014"));
			this.imageList.push(new CarouselImage("image96.JPG", "Wedding Terrara House Estate", "November 2014"));
			this.imageList.push(new CarouselImage("image97.JPG", "Wedding Terrara House Estate", "November 2014"));
			this.imageList.push(new CarouselImage("image98.JPG", "Wedding Terrara House Estate", "November 2014"));
			this.imageList.push(new CarouselImage("image99.JPG", "Porteno", "December 2014"));
			this.imageList.push(new CarouselImage("image100.JPG", "The Stoned Crow Crows Nest", "December 2014"));
			this.imageList.push(new CarouselImage("image101.JPG", "Roadtrip to Jervis Bay", "December 2014"));
			this.imageList.push(new CarouselImage("image102.JPG", "Watsons Bay Boutique Hotel", "January 2014"));
			this.imageList.push(new CarouselImage("image103.JPG", "A-themed AQ House Warming", "February 2015"));
			this.imageList.push(new CarouselImage("image104.JPG", "Greek Easter Vicinity", "April 2015"));
			this.imageList.push(new CarouselImage("image105.JPG", "Oakridge Estate Yarra Valley Victoria", "April 2015"));
			this.imageList.push(new CarouselImage("image106.JPG", "Sydney Swans Match", "May 2015"));
			this.imageList.push(new CarouselImage("image107.JPG", "City2Surf", "August 2015"));
			this.imageList.push(new CarouselImage("image108.JPG", "Crows Nest", "February 2016"));
			this.imageList.push(new CarouselImage("image109.JPG", "Movida", "April 2016"));
			this.imageList.push(new CarouselImage("image110.JPG", "Muse Restuarant Hunter Valley", "April 2016"));
			this.imageList.push(new CarouselImage("image111.JPG", "Hunter Valley", "April 2016"));
			this.imageList.push(new CarouselImage("image112.JPG", "Tallavera Estate Hunter Valley", "April 2016"));
			this.imageList.push(new CarouselImage("image113.JPG", "Greek Easter La Grillade", "May 2016"));
			this.imageList.push(new CarouselImage("image114.JPG", "Flying Fajita Sistas", "February 2014"));
			this.imageList.push(new CarouselImage("image115.JPG", "House of Crabs", "April 2014"));
			this.imageList.push(new CarouselImage("image116.JPG", "ANZAC DAY", "April 2014"));
			this.imageList.push(new CarouselImage("image117.JPG", "Cafe Paci", "May 2014"));
			this.imageList.push(new CarouselImage("image118.JPG", "Small lunch at Yiayia's", "May 2014"));
			this.imageList.push(new CarouselImage("image119.JPG", "Roadtrip Canberra", "June 2014"));
			this.imageList.push(new CarouselImage("image120.JPG", "Greek Wedding Sylvania", "June 2014"));
			this.imageList.push(new CarouselImage("image121.JPG", "Greek Wedding Sylvania", "June 2014"));
			this.imageList.push(new CarouselImage("image122.JPG", "Sydney Swans Match", "June 2014"));

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

