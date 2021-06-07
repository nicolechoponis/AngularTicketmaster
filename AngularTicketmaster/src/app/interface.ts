
export interface Event {
    events:Events[];
    venues:Venues[];
}
export interface Events {
    name:string;
    type:string;
    url:string;
    dates:Dates; 
    priceRanges:PriceRanges[];
    seatmap:Seatmap;
}
export interface Dates {
    start:Start;
}
export interface Start {
    localDate:string;
    localTime:string;
}
export interface PriceRanges {
    min:number;
    max:number;
}
export interface Seatmap {
    staticUrl:string;
}
export interface Venues {
    name:string;
    city: {
        name:string;
    }
    state: {
        name:string;
        stateCode:string;
    }
    address: {
        line1:string;
    }
}


// something this should be used in the app component ts files to access the embedded json data
//_embedded is before events array and before venues array
// events = []; 

//    this.APIService.getEmbedded().subscribe(data => {
//       this.events = data._embedded.events;
//       this.venues = data._embedded.venues;
//     });