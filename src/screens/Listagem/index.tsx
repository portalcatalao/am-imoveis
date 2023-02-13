import Link from 'next/link';
import { CardProperty } from '../../components/Cards/Property'
import { InputSelect } from '../../components/Forms/InputSelect';
import { Filter } from '../../components/Forms/Filter';
import { GridLayout } from '../../styles/globals'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'

import {
    Container, Breadcrumb, Content, Results, Properties,
    Top, Right, Bot,
} from './styles'

import { getUrl } from '../../helpers/functions';
import { maskPrice } from '../../helpers/mask';
import { IProperty } from '../../types/interfaces';
import { Pagination } from '../../components/Pagination';

interface Props {
    properties: IProperty[];
    total: number,
    page: number
}

export default function Listing({ properties, total, page }: Props) {
    const [pages, setPages] = useState(1);

    return (
        <Container>
            <GridLayout>
                <Breadcrumb>
                    <Link href="/">Home</Link> / Listagem de Imóveis
                </Breadcrumb>

                <Content>
                    <Filter />

                    <Results>
                        <Top>
                            <h3>202 imóveis encontrados</h3>
                            <Right>
                                <span>Ordernar:</span>
                                <InputSelect placeholder="Mais recentes" value={undefined} onChange={undefined} />
                            </Right>
                        </Top>

                        <Properties>
                            {properties?.map(property =>
                                <CardProperty
                                    src={getUrl(property.thumbnail)}
                                    forSell={property.adType === 'venda'}
                                    forRent={property.adType === 'aluguel'}
                                    price={maskPrice(property.value)}
                                    title={property.address.district}
                                    city={property.type.charAt(0).toUpperCase() + property.type.slice(1) + ' em ' + property.address.city}
                                    bed={property.numberRooms}
                                    bath={property.numberBathrooms}
                                    car={property.numberGarages}
                                    area={property.area}
                                    id={property.id}
                                />
                            )}
                        </Properties>

                        <Bot>
                            <Pagination total={total} page={page} onChange={setPages} />
                        </Bot>
                    </Results>
                </Content>
            </GridLayout>
        </Container>
    )
}