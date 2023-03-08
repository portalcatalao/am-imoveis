export type IAddress = {
    id?: string;
    nation?: string;
    state: string;
    city: string;
    district: string;
    route?: string;
    zipcode?: string;
    place_id?: string;
    formatted_address?: string;
    number?: number;
    location?: Location;
}

export type IPage = {
    id?: number;
    slug?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    images?: Array<string>;
    name: string;
    realEstate?: IRealEstate;
}

export type IMenu = {
    id?: number;
    name: string;
    link?: string;
    submenus?: ISubmenu[];
    realEstate?: IRealEstate;
}

export type ISubmenu = {
    id?: number;
    name: string;
    link?: string;
    menu?: IMenu;
}

export type IUser = {
    id?: string;
    name: string;
    email: string;
    password?: string;
    cellPhone: string;
    avatar?: string;
    document: string;
    creci?: string;
    isGoogleAuth?: boolean;
    idGoogle?: string;
    realEstate?: IRealEstate;
    isRealEstate?: boolean;
    immobiles?: IProperty[];
    role?: any;
}

export type IRealEstate = {
    id?: string;
    name: string;
    email: string;
    password?: string;
    cellPhone: string;
    logo?: string;
    document: string;
    creci: string;
    realtors?: IUser[];
    immobiles?: IProperty[];
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
    totalArea: number;
    buildingArea: number;
    allowPets: boolean;
    hasPool: boolean;
    hasSolarEnergy: boolean;
    hasSecuritySystem: boolean;
    hasElectricFence: boolean;
    hasBarbecue: boolean;
    isFurnished: boolean;
    isRoof: boolean;
    showAddress: boolean;
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

export interface IConfig {
    id?: number;
    phone?: string;
    whatsapp?: string;
    email?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    metaCopyright?: string;
    metaTitle?: string;
    metaDescription?: string;
    propertyAddressShow?: boolean;
    realEstate?: IRealEstate;
}

interface IBannerType {
    id?: number;
    name: string;
    banners?: IBanner[];
    width?: number;
    height?: number;
}

export interface IBanner {
    id?: number;
    name?: string;
    link?: string;
    path: string;
    bannerType?: IBannerType;
    realEstate?: IRealEstate;
}