export class Contact {
	public songChanged: boolean = false;
	public songSaved: boolean = false;

	constructor(public Id: string,
				public Name: string,
				public Dairy_Free__c: boolean,
				public Gluten_Free__c: boolean,
				public Guest_ID__c: string,
				public Vegetarian__c: boolean,
				public Nut_Free__c: boolean,
				public Other_Dietry_Requirements__c: string,
				public RSVP_Ceremony__c: string,
				public RSVP_Friday_Night__c: string,
				public RSVP_Reception__c: string,
				public RSVP_Sunday_Brunch__c: string,
				public FirstName: string,
				public Song__c: string,
				public Guest_Notes__c: string
				) { }
}

export class Family{
  	constructor(	public Id: string,
  					public Name: string,
  					public Family_Id__c: string,
  					public Contacts: Contact[]
  				) { }

}
