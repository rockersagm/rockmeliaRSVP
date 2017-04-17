import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';


//import { Family } from './family';


@Injectable()
export class SFService {
	heroes: String[];

	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
	private bodyString = 'grant_type=password&client_id=3MVG9ZL0ppGP5UrCib6EIBJpKo97QKBCL8ykWG.DCANZ1VNuuaPruEnpXJow21k0B825CQ2vL7IK7o.rJawcD&client_secret=7095714655006159152&username=rock@rockmelia.com&password=andySF02';
	private options       = new RequestOptions({ headers: this.headers }); // Create a request option

	constructor(private http: Http) { }

	login() : Observable<any> {
		 console.log('start login');
		 console.log('bodyString', this.bodyString);
		 console.log('login() headers', this.headers);
		 return this.http.post('https://login.salesforce.com/services/oauth2/token', this.bodyString, this.options)
							.map((response: Response) => {
								console.log(response);
								var body = response.json();
								if (body){
										let res = response.json();
										let token = res.access_token;
										let instanceURL = res.instance_url;
										console.log('token='+token + ' instanceURL='+instanceURL);
										localStorage.setItem('token', token);
										localStorage.setItem('instanceURL', instanceURL);
								}
								else{
										return body;
								}
						})
							 .catch(this.handleError);
	}

	getGuests() : Observable<any> {
		 let getHeaders = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')});
		 let getOptions       = new RequestOptions({ headers: getHeaders }); // Create a request option

		 console.log('getGuests() headers', getHeaders);

		 return this.http.get('/services/data/v37.0/query/?q=SELECT+name,Id,Envelope_Name__c,Family_ID__c,Family_Number_Name__c,ShippingAddress,ShippingCity,ShippingCountry,ShippingGeocodeAccuracy,ShippingLatitude,ShippingLongitude,ShippingPostalCode,ShippingState,ShippingStreet,Side__c,Tier__c+from+Account', getOptions)
							.map((response: Response) => {
								console.log(response);
								var body = response.json();
								console.log(body.records);

								return body.records;
								//return mapFamilies(response);
							})
							 .catch(this.handleError);
	}

	 private handleError(error:any) {
				console.error('Error: Status='+error.status+' statusText='+error.statusText+' url='+error.url);
				console.error(error);
				return Observable.throw(error);
		}

}
