import { IProperty } from "../types/interfaces";

export function getImmobileTitleCard({ address }: IProperty) {
    let title = '';
    { address.route ? title = title + address.route : null }
    { address.route && address.district ? title = title + ', ' : null }
    { address.district ? title = title + address.district : null }
    return title;
}