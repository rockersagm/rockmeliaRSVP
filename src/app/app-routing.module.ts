import { NgModule }              from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

import { CanDeactivateGuard }    	from './can-deactivate-guard.service';
import { AuthService }      		from './auth.service';
import { AuthGuard }            	from './auth-guard.service';

const appRoutes: Routes = [
	{ path: 'login', 	loadChildren:'app/login/login.module#LoginModule'},
	{ path: 'main', loadChildren:'app/main/main.module#MainModule'},
	{
		path: 'compose',
		component: ComposeMessageComponent,
		outlet: 'popup'
	},
	{ path: '',   redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', 	component: PageNotFoundComponent }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthService,
		AuthGuard,
		CanDeactivateGuard
	]

})
export class AppRoutingModule {}
