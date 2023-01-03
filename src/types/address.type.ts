type Location = {
    lat: number;
    lng: number;
}

export interface Address {
    id: string;
    nation: string;
    state: string;
    city: string;
    district: string;
    route: string;
    zipcode: string;
    place_id: string;
    formatted_address: string;
    number: number;
    location: Location;
}