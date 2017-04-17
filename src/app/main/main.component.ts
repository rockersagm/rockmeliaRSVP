//TODO add animations https://angular.io/docs/ts/latest/guide/animations.html

import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import { DialogService }  		from '../dialog.service';
import { AuthService }      		from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	pendingChanges :boolean = true;
	constructor(private router: Router,
				public authService: AuthService,
				public dialogService: DialogService) {

	}

	ngOnInit() {
	}

	gotoLogout() {
		this.authService.logout();
		this.router.navigate(['/login']);
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
