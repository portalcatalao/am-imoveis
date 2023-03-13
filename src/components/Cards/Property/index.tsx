import { Container, CardHeader, Thumbnail, CardBody, Category, Title, Address, TagPrice, Resume, Mask } from "./styles";
import Image, { StaticImageData } from 'next/image';

import { FaBath, FaCar } from 'react-icons/fa';
import { IoBedSharp } from 'react-icons/io5'

interface Props {
    src?: string | StaticImageData;
    forRent?: boolean,
    forSell?: boolean,
    price?: string,
    title?: string,
    city?: string,
    bed?: number,
    bath?: number,
    car?: number,
    area?: number,
    id?: number | string;
}

export function CardProperty({ src, forRent, forSell, price, title, city, bed, bath, car, area, id }: Props) {
    return (
        <Container href={`/imovel/${id}`}>
            <Thumbnail>
                <Image src={src} alt={""} layout="fill" />
                <Mask />
            </Thumbnail>

            <CardHeader>
                {forSell && <Category rent={false}>Para venda</Category>}
                {forRent && <Category rent={true} >Para alugar</Category>}
            </CardHeader>

            <CardBody>
                <TagPrice>R$ {price}</TagPrice>
                <Title>{title}</Title>
                <Address>{city}</Address>
                <Resume>
                    <li><IoBedSharp />{bed}</li>
                    <li><FaBath />{bath}</li>
                    <li><FaCar />{car}</li>
                    <li>{area} m²</li>
                </Resume>
            </CardBody>
        </Container>
    )
}