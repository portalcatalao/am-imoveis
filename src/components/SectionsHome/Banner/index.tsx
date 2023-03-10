import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import { InputSelect } from "../../Forms/InputSelect";
import { useFilter } from "../../../contexts/FilterContext";
import { normalizeString } from "../../../helpers/functions";
import { GridLayout } from "../../../styles/globals";

import {
    Container, Background, ButtonSubmit, ContentBanner, Form,
    Input, Search, Subtitle, Tab, Tabs, TitleMain, Type, Text
} from "./styles";

import BannerBackground from "../../../../public/images/banner-home2.jpg"

export function BannerHome({ title, subtitle }) {
    const { propertyType, adType, city, district } = useFilter();
    const router = useRouter();

    const handleSubmit = async () => {
        let path = `/imoveis/filter?`;
        { adType.value ? path = path + `adType=${adType.value.enum}` : '' }
        { city.value ? path = path + `&city=${normalizeString(city.value.name)}` : '' }
        { district.value ? path = path + `&district=${normalizeString(district.value.name)}` : '' }
        { propertyType.value ? path = path + `&propertyType=${normalizeString(propertyType.value.enum)}` : '' }
        router.push(path);
    }

    useEffect(() => {
        if (adType.options.length > 0) adType.onChange(adType.options[0]);
    }, [adType.options]);

    return (
        <Container>
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
                                        placeholder="Tipo de im??vel"
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
                                <ButtonSubmit onClick={handleSubmit}>Buscar im??veis</ButtonSubmit>
                            </Form>
                        </Search>
                    </Text>
                </GridLayout>
            </ContentBanner>
        </Container>
    )
}