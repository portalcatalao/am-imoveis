export type IAddress = {
    id?: string;
    nation?: string;
    state: string;
    city: string;
    district: string;
    route: string;
    zipcode?: string;
    place_id?: string;
    formatted_address?: string;
    number: number;
    location?: Location;
}

export type IUser = {
    id?: string;
    name: string;
    email: string;
    password: string;
    cellPhone: string;
    avatar?: string;
    cpf: string;
    creci?: string;
    isGoogleAuth?: boolean;
    idGoogle?: string;
    realEstate?: IRealEstate;
    immobiles?: IProperty[];
}

export type IRealEstate = {
    id: string;
    name: string;
    email: string;
    password: string;
    cellPhone: string;
    logo: string;
    cnpj: string;
    creci: string;
    realtors: IUser[];
    immobiles: IProperty[];
}

export type IProperty = {
    id?: string;
    propertyType: string;
    adType: string;
    concierge: string;
    keyType: string;
    relationship: string;
    stateProperty: string;
    numberRooms: number;
    numberBathrooms: number;
    numberSuites: number;
    numberGarages: number;
    area: number;
    pets: boolean;
    pool: boolean;
    roof: boolean;
    condominiumValue: string;
    payIptu: boolean;
    iptuValue: string;
    propertyValue: string;
    imageMain?: string;
    images?: Array<string>;
    address: IAddress;
    owner?: IUser;
    realtor?: IUser;
    realEstate?: IRealEstate;
    createdAt?: Date;
    updateAt?: Date;
}