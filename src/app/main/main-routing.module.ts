// NOTE: return to this tutorial for more complex routes
// https://angular.io/docs/ts/latest/guide/router.html#

import { NgModule } 			from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } 		from './main.component';
import { AuthGuard }            from '../auth-guard.service';
import { AuthService }            from '../auth.service';
import { CanDeactivateGuard }    from '../can-deactivate-guard.service';
import { VenueComponent } 		from './venue/venue.component';
import { DashComponent } 		from './dash/dash.component';
import { RsvpComponent } 		from './rsvp/rsvp.component';
import { GiftsComponent } 		from './gifts/gifts.component';

const routes = [
	{	path: '',
		component: MainComponent,
		//*************  COMMENTED OUT FOR DEVELOPMENT ***************
	    //canActivate: [AuthGuard],

        canDeactivate: [CanDeactivateGuard],
		children: [
	      {
	        path: '',
	        //*************  COMMENTED OUT FOR DEVELOPMENT ***************
            //canActivateChild: [AuthGuard],
	        children: [
	          //{ path: 'venue', loadChildren: 'app/main/venue/venue.module#VenueComponent' },
              { path: '', redirectTo: 'dash', pathMatch: 'full' },
	          { path: 'venue', component: VenueComponent },
	          { path: 'dash', component: DashComponent },
	          { path: 'rsvp', component: RsvpComponent },
	          { path: 'gifts', component: GiftsComponent },

	        ]
	      }
	    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
   providers: [
  ]
})

export class MainRoutingModule { }

