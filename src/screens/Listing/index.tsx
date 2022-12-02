import { GridLayout } from '../../styles/globals'
import { Container, Content, Filter, Search, Tabs, Tab, Results, Properties, Top, Right, Bot, Slider, Progress, RangeInput, RangeMin, RangeMax } from './styles'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { BsSearch } from 'react-icons/bs'

import { Card } from '../../components/Card'
import { InputSelect } from '../../components/InputSelect';
import { useSelect } from '../../hooks/useSelect';
import { useState } from 'react';

export default function Listing() {
    const [adTypeActive, setAdTypeActive] = useState(0);
    const adType = useSelect();

    return (
        <Container>
            <GridLayout>
                <span>Home <FiChevronRight /> Listagem de Imóveis</span>

                <Content>
                    <Filter>
                        <h3>Buscar</h3>

                        <Search>
                            <input placeholder='Código'></input>
                            <button><BsSearch /></button>
                        </Search>

                        <h3>Filtrar</h3>
                        <Tabs>
                            <Tab active={adTypeActive === 0} onClick={() => setAdTypeActive(0)}>Comprar</Tab>
                            <Tab active={adTypeActive === 1} onClick={() => setAdTypeActive(1)}>Alugar</Tab>
                        </Tabs>

                        <InputSelect
                            placeholder="Tipo de imóvel"
                            {...adType}
                        />
                        <InputSelect
                            placeholder="Localização"
                            {...adType}
                        />

                        <InputSelect
                            placeholder="Bairro"
                            {...adType}
                        />

                        <div>
                            <input placeholder='500.000'></input>
                            até
                            <input placeholder='4.000.000'></input>
                        </div>

                        <Slider>
                            <Progress></Progress>
                        </Slider>

                        <RangeInput>
                            <RangeMin type="range" min="0" max="40000" value="8000"></RangeMin>
                            <RangeMax type="range" min="0" max="40000" value="30000"></RangeMax>
                        </RangeInput>
                    </Filter>

                    <Results>
                        <Top>
                            <h3>202 imóveis encontrados</h3>

                            <Right>
                                <p><span>Ordernar:</span> Mais recentes</p>
                                <FiChevronDown />
                            </Right>
                        </Top>

                        <Properties>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
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