import { GridLayout } from '../../styles/globals'
import {
    Container, Breadcrumb, Content, Filter, Search, Tabs, Tab, Inputs, Results, Properties,
    Top, Right, Bot, ButtonFiltrar, Divisor, ButtonShow, MoreOptions, CheckboxGroup,
    TestDiv, CloseFilter, ShowFilter
} from './styles'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { FiChevronRight, FiX } from "react-icons/fi";
import { BsSearch } from 'react-icons/bs'

import { CardProperty } from '../../components/CardProperty'
import { InputSelect } from '../../components/InputSelect';
import { InputPrice } from '../../components/InputPrice';
import { useSelect } from '../../hooks/useSelect';
import { useState } from 'react';
import Link from 'next/link';

import Checkbox from '../../components/Checkbox'
import QuantitySelect from '../../components/QuantitySelect';
import { FaFilter } from 'react-icons/fa';

export default function Listing() {
    const [open, setOpen] = useState(false);
    const [adTypeActive, setAdTypeActive] = useState(0);
    const [showMore, setShowMore] = useState(false);

    return (
        <Container>
            <GridLayout>
                <ShowFilter open={open} onClick={() => setOpen(true)}>
                    <div>
                        <FaFilter />
                    </div>
                    <span>Filtrar busca</span>
                </ShowFilter>

                <Breadcrumb>
                    <Link href="/">Home</Link>
                    <FiChevronRight />
                    Listagem de Imóveis
                </Breadcrumb>

                <Content>
                    <TestDiv open={open} />

                    <Filter onSubmit={e => e.preventDefault()} open={open}>
                        <CloseFilter>
                            <span>Filtrar busca</span>
                            <FiX onClick={() => setOpen(false)} />
                        </CloseFilter>

                        <Search>
                            <input placeholder='Código'></input>
                            <button type="button"><BsSearch /></button>
                        </Search>

                        <Divisor></Divisor>
                        <Tabs>
                            <Tab active={adTypeActive === 0} onClick={() => setAdTypeActive(0)}>Comprar</Tab>
                            <Tab active={adTypeActive === 1} onClick={() => setAdTypeActive(1)}>Alugar</Tab>
                        </Tabs>


                        <Inputs>
                            <InputSelect placeholder="Cidade" value={undefined} onChange={undefined} />
                            <InputSelect placeholder="Bairro" value={undefined} onChange={undefined} />

                            <div>
                                <InputPrice title={"Preço Min."} />
                                <span>até</span>
                                <InputPrice title={"Preço Máx."} />
                            </div>

                            <CheckboxGroup>
                                <Checkbox checked={false}>Apartamento</Checkbox>
                                <Checkbox checked={false}>Casa</Checkbox>
                                <Checkbox checked={false}>Casa de condomínio</Checkbox>
                                <Checkbox checked={false}>Kitnet/Studio</Checkbox>
                                <Checkbox checked={false}>Loteamento</Checkbox>
                                <Checkbox checked={false}>Fazenda</Checkbox>
                                <Checkbox checked={false}>Chácara</Checkbox>
                            </CheckboxGroup>
                        </Inputs>



                        {!showMore && <ButtonShow onClick={() => setShowMore(true)}>Ver mais opções</ButtonShow>}
                        {showMore && <ButtonShow onClick={() => setShowMore(false)}>Ver menos opções</ButtonShow>}
                        <Divisor></Divisor>

                        {showMore &&
                            <MoreOptions>
                                <QuantitySelect title={"Quartos"} />
                                <QuantitySelect title={"Banheiros"} />
                                <QuantitySelect title={"Vagas na garagem"} />
                                <Divisor></Divisor>
                            </MoreOptions>
                        }

                        <ButtonFiltrar type="submit">Filtrar</ButtonFiltrar>
                    </Filter>

                    <Results>
                        <Top>
                            <h3>202 imóveis encontrados</h3>
                            <Right>
                                <span>Ordernar:</span>
                                <InputSelect placeholder="Mais recentes" value={undefined} onChange={undefined} />
                            </Right>
                        </Top>

                        <Properties>
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                        </Properties>

                        <Bot>
                            <li><AiOutlineArrowLeft /></li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li><AiOutlineArrowRight /></li>
                        </Bot>
                    </Results>
                </Content>
            </GridLayout>
        </Container>
    )
}