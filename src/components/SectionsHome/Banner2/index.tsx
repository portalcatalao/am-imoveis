import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelect } from "../../../hooks/useSelect";
import { GridLayout } from "../../../styles/globals";
import { InputSelect } from "../../Forms/InputSelect";
import {
    Banner, Background, ButtonSubmit, ContentBanner, Form,
    Input, Search, Subtitle, Tab, Tabs, TitleMain, Type, Text
} from "./styles";

import CaixaAqui from "../../../../public/images/caixa.svg"
import BannerBackground from "../../../../public/images/banner-home2.jpg"
import { useFilter } from "../../../contexts/FilterContext";
import { useRouter } from "next/router";
import { normalizeString } from "../../../helpers/functions";

export function BannerHome({ title, subtitle }) {
    const { propertyType, adType, city, district } = useFilter();
    const router = useRouter();

    const handleSubmit = async () => {
        let path = `/imoveis/filter?`;
        {adType.value ? path = path + `adType=${adType.value.enum}` : ''}
        { city.value ? path = path + `&city=${normalizeString(city.value.name)}` : '' }
        { district.value ? path = path + `&district=${normalizeString(district.value.name)}` : '' }
        { propertyType.value ? path = path + `&propertyType=${normalizeString(propertyType.value.enum)}` : '' }
        router.push(path);
    }

    useEffect(() => {
        if(adType.options.length > 0) adType.onChange(adType.options[0]);
    }, [adType.options]);

    return (
        <Banner>
            <Background>
                <Image src={BannerBackground} alt="banner" />
            </Background>

            <ContentBanner>
                <GridLayout p="2rem 8rem">
                    <Text>
                        <TitleMain>{title}</TitleMain>
                        <Subtitle>{subtitle}</Subtitle>

                        <Search>
                            <Tabs>
                                {adType?.options?.map(option =>
                                    <Tab active={adType.value?.id === option.id} onClick={() => adType.onChange(option)}>{option.name}</Tab>
                                )}
                            </Tabs>
                            <Form onSubmit={e => e.preventDefault()}>
                                <Type>
                                    <InputSelect
                                        placeholder="Tipo de imóvel"
                                        {...propertyType}
                                    />
                                </Type>
                                <Type>
                                    <InputSelect
                                        placeholder="Cidade"
                                        {...city}
                                    />
                                </Type>
                                <Type>
                                    <InputSelect
                                        placeholder="Bairro"
                                        {...district}
                                    />
                                </Type>
                                {/* <Input placeholder="Pesquise por bairro, cidade ou código" /> */}
                                <ButtonSubmit onClick={handleSubmit}>Buscar imóveis</ButtonSubmit>
                            </Form>
                        </Search>
                    </Text>
                </GridLayout>

                <Image src={CaixaAqui} alt="Caixa Aqui" />
            </ContentBanner>
        </Banner>
    )
}