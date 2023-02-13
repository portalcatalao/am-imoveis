import { IProperty } from "../types/interfaces";
import { propertyType } from "../types/utils";


export const getUrl = (path: string) => {
    if (!path) {
        return '/no-image.png';
    }
    return path.startsWith('storage') ? `${process.env.NEXT_PUBLIC_BASE_URL}${path}` : path;
}

function findInOptions(param: string, options) {
    let optionSelected;
    options.forEach(option => {
        { option.enum === param ? optionSelected = option : null }
    });
    return optionSelected;
}

export function getPropertyTitleCard({ address, adType, type }: IProperty) {
    let title = '';
    const typeOption = findInOptions(type, propertyType);
    { type ? title = title + typeOption.name : null }
    { adType && adType === 'aluguel' ? title = title + ' ' : null }
    { adType && adType === 'venda' ? title = title + ' à venda ' : null }
    { address?.district ? title = title + 'em ' + address.district : null }
    { address && !address?.district && address.city ? title = title + 'em ' + address.city : null }
    return title;
}
