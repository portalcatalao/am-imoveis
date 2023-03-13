import styled from "styled-components";
import Link from 'next/link';
import { GridLayout, Props } from "../../../styles/globals";

export const Container = styled.div`
    display: flex;
`

export const Content = styled(GridLayout)`
    padding: 2rem 0;
`

export const TopCard = styled.div`
    position: relative;
    width: 100%;

    h1 {
        text-align: left;
    }

    div {
        width: 100%;
    }

    div p {
        display: flex;
        gap: 16px;
        justify-content: space-between;

        @media(max-width: 660px) {
            flex-direction: column;
        }
    }   
`

export const LinkButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray_100};
    font-weight: 500;
    

    @media(max-width: 660px) {
        width: 100%;
        justify-content: start;
    }
    
    svg {
        width: 22px;
        height: 22px;
    }

    :hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`