// NOTE: return to this tutorial for more complex routes
// https://angular.io/docs/ts/latest/guide/router.html#

import { NgModule } 			from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } 		from './main.component';
import { AuthGuard }            from '../auth-guard.service';
import { AuthService }            from '../auth.service';
import { CanDeactivateGuard }    from '../can-deactivate-guard.service';

const routes = [
	{	path: '',
		component: MainComponent,

		//*************  COMMENTED OUT FOR TESTING ***************
	    //canActivate: [AuthGuard],

        canDeactivate: [CanDeactivateGuard],
		children: [
	      {
	        path: '',
            canActivateChild: [AuthGuard],
	        children: [
	          //{ path: 'crises', component: ManageCrisesComponent },
	          //{ path: 'heroes', component: ManageHeroesComponent },
	          //{ path: '', component: AdminDashboardComponent }
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

