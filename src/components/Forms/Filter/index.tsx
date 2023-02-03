import { useState } from "react";

import { InputPrice } from "../InputPrice";
import { InputSelect } from "../InputSelect";
import QuantitySelect from "../QuantitySelect";
import Checkbox from "../Checkbox";

import {
    Container, CloseFilter, Search, Divisor, Tabs, Tab, Inputs, CheckboxGroup, ButtonShow,
    MoreOptions, ButtonFiltrar, ShowFilter, Mask, InputPriceGroup,
} from "./styles";

import { BsSearch } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function Filter() {
    const [open, setOpen] = useState(false)
    const [showMore, setShowMore] = useState(false);
    const [adTypeActive, setAdTypeActive] = useState(0);

    return (
        <>
            <ShowFilter onClick={() => setOpen(true)}>
                <div>
                    <FaFilter />
                </div>
                <span>Filtrar busca</span>
            </ShowFilter>

            <Mask open={open} />

            <Container onSubmit={e => e.preventDefault()} open={open}>
                <CloseFilter>
                    <span>Filtrar busca</span>
                    <div onClick={() => setOpen(false)}>
                        <FiX />
                    </div>
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

                    <InputPriceGroup>
                        <InputPrice title={"Preço Min."} />
                        <span>até</span>
                        <InputPrice title={"Preço Máx."} />
                    </InputPriceGroup>

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
            </Container>
        </>
    )
}