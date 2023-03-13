import styled from "styled-components";
import { GridLayout } from "../../styles/globals";

export const Container = styled.div`
    min-height: 70vh;
`
export const Content = styled(GridLayout)`
    display: flex;
    flex-direction: column;
    padding: 2rem 0rem;

    @media(max-width: 1320px) {
        padding: 2rem 1rem;
    }
`
export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.gray_100};
    margin-bottom: 4px;
`
export const Subtitle = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.colors.gray_100};
    max-width: 70%;
    margin-bottom: 16px;

    @media(width: 720px) {
        max-width: 100%;
    }
`