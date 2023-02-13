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
    password?: string;
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
    cod?: string;
    type: string;
    adType: string;
    value: string;
    thumbnail?: string;
    images?: Array<string>;
    video?: string;
    description?: string;
    condominium?: string;
    surroundings?: string;
    numberRooms: number;
    numberBathrooms: number;
    numberSuites: number;
    numberGarages: number;
    area: number;
    allowPets: boolean;
    hasPool: boolean;
    isRoof: boolean;
    condominiumValue: string;
    iptu: boolean;
    iptuValue: string;
    concierge: string;
    keyType: string;
    relationship: string;
    availability: string;
    furniture?: string[];
    owner?: IUser;
    realtor?: IUser;
    realEstate?: IRealEstate;
    address?: IAddress;
    createdAt?: Date;
    updateAt?: Date;
    isFeatured?: boolean;
}