import { Address } from "./address.type";

enum PropertyType {
    APARTAMENTO = 'apartamento',
    CASA = 'casa',
    KITNET = 'kitnet_studio',
    CASACONDOMINIO = 'casa_condominio',
    LOTE = 'lote',
    FAZENDA = 'fazenda',
    CHACARA = 'chacara'
}

enum AdType {
    ALUGUEL = 'aluguel',
    VENDA = 'venda'
}

enum Concierge {
    INTEGRAL = 'integral',
    DIURNA = 'diurna',
    NOTURNA = 'noturna',
    SEMPORTARIA = 'sem_portaria'
}

enum KeyType {
    CHAVE = 'chave',
    SENHA = 'senha',
    BIOMETRIA = 'biometria'
}

enum Relationship {
    PROPRIETARIO = 'proprietario',
    ADMINISTRADOR = 'administrador'
}

enum StateProperty {
    INQUILINOMORA = 'inquilino_mora',
    EUMORO = 'eu_moro',
    ESTAVAGO = 'esta_vago'
}

export interface Immobile {
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
    address: Address;
}