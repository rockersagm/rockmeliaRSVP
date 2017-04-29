import { BrowserModule } 			from '@angular/platform-browser';
import { NgModule } 				from '@angular/core';
import { FormsModule } 				from '@angular/forms';
import { HttpModule } 				from '@angular/http';
import { BrowserAnimationsModule } 	from '@angular/platform-browser/animations';

import { AppComponent }				from './app.component';
import { PageNotFoundComponent } 	from './page-not-found.component';
import { ComposeMessageComponent } 	from './compose-message.component';
import { DialogService }           	from './dialog.service';

import { AppRoutingModule } 		from './app-routing.module';

import { SFService }          from './sf.service';


//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		ComposeMessageComponent
	],
	imports: [
//		NgbModule.forRoot(),
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [
		DialogService,
		SFService
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
