
export interface EventResponse {
    _embedded: {
        events:Event[];
    }
}
export interface Event {
    name:string;
    type:string;
    url:string;
    images:Images[];
    dates:Dates; 
    priceRanges:PriceRanges[];
    seatmap:Seatmap;
    classifications:Classification[];
    id:string;
    _embedded: {
        venues:Venue[];
    }
}
export interface Images {
    url:string;
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
export interface Classification{
    segment:{
        name:string;
        genre:Genre[];
    }
}
export interface Genre{
    name: string;
}
export interface Venue {
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
        line2:string;
        line3:string;
    }
}


// something this should be used in the app component ts files to access the embedded json data
//_embedded is before events array and before venues array
// events = []; 

//    this.APIService.getEmbedded().subscribe(data => {
//       this.events = data._embedded.events;
//       this.venues = data._embedded.venues;
//     });