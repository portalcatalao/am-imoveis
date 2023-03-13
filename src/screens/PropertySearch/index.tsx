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
import { useFilter } from '../../contexts/FilterContext';


export default function PropertySearch({ filter }) {
    const { fillFilter, results, total } = useFilter();
    
    useEffect(() => {
        if (filter) fillFilter(filter);
    }, []);

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
                            <h3>{total} imóveis encontrados</h3>
                            <Right>
                                <span>Ordernar:</span>
                                <InputSelect placeholder="Mais recentes" value={undefined} onChange={undefined} />
                            </Right>
                        </Top>

                        <Properties>
                            {results?.map(property =>
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
                                    area={property.totalArea}
                                    id={property.id}
                                />
                            )}
                        </Properties>

                        <Bot>
                            <Pagination total={total} page={1} onChange={() => {}} />
                        </Bot>
                    </Results>
                </Content>
            </GridLayout>
        </Container>
    )
}