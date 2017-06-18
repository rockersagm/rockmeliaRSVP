import { Component, OnInit, Renderer2 } from '@angular/core';
import { SFService }          	from '../../sf.service';
import { Family, Contact }      from '../../Family';
import { DialogService }  		from '../../dialog.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-rsvp',
	templateUrl: './rsvp.component.html',
	styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

	family : Family;
	pendingChanges : boolean = false;
	closeResult: string;
	guestIdToUpdate:string

	constructor(	public dialogService: DialogService,
		private sfService: SFService,
		private renderer : Renderer2,
		private modalService: NgbModal
		) {
	}

	ngOnInit() {
		this.family = this.sfService.loadData();
	}

	onRSVP(guestId, event, rsvp, index) {

		this.renderer.selectRootElement("#"+event+"Spinner-"+index).style.display = 'inline-block';
		this.renderer.selectRootElement("#"+event+"Disable-"+index).style.display = 'inline-block';

		console.log('onRSVP clicked guestId='+guestId+' event=' + event + ' rsvp='+rsvp);
		this.pendingChanges = true;

		this.sfService.submitRSVP(this.family.Id, guestId, event, rsvp).subscribe((val) => {
			console.log('submit complete val='+val);
			this.family = this.sfService.loadData();
			this.pendingChanges = false;
		});
	}

	changeDietary(guestId, preference, val) {

		this.pendingChanges = true;

	}

	updateGuestField(guestId, fieldName, value) {
		this.sfService.updateGuestField(this.family.Id,
				guestId,
				fieldName,
				value
				).subscribe((val) => {
					console.log('updateField complete fieldName='+fieldName+ ' value='+value);
					this.family = this.sfService.loadData();
					this.pendingChanges = false;
				});
	}

	open(content) {
		this.modalService.open(content).result.then((result) => {

			this.sfService.changeDietary(this.family.Id,
				result.Id,
				result.Vegetarian__c,
				result.Gluten_Free__c,
				result.Dairy_Free__c,
				result.Nut_Free__c,
				result.Other_Dietry_Requirements__c).subscribe((val) => {
					console.log('removeDietary complete val='+val);
					this.family = this.sfService.loadData();
					this.pendingChanges = false;
				});

			}, (reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			});
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
	}

	submitNotes(notes) {
		console.log(notes);
	}

	canDeactivate(): Promise<boolean> | boolean {
		// Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
		if (!this.pendingChanges) {
			return true;
		}
		// Otherwise ask the user with the dialog service and return its
		// promise which resolves to true or false when the user decides
		return this.dialogService.confirm('Discard changes?');
	}

}
