import styled from "styled-components";
import Link from 'next/link';

import { Props } from "../../styles/globals";

export const Container = styled.div`
`
export const Banner = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: #090d1ec9;
`
export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const ContentBanner = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1020px) {
        padding: 15px;
    }
`
export const TitleMain = styled.h1`
    text-align: center;
    font-size: 56px;
    font-weight: 600;
    color: #fff;

    @media (max-width: 720px) {
        font-size: 38px;
    }
`
export const Title = styled.h1<Props>`
    text-align: center;
    /* font-family: 'Nunito', sans-serif !important; */
    font-size: ${({ fz }) => fz ?? "56px"};
    font-weight: 600;
    color: ${({ cl }) => cl ?? '#ffffff'};

    @media (max-width: 1020px) {
        padding: 10px;
        font-size: 28px;
    }
`
export const Subtitle = styled.p<Props>`
    /* font-family: 'Nunito', sans-serif !important; */
    font-size: ${({ fz }) => fz ?? "1.2rem"};
    color: ${({ cl }) => cl ?? '#ffffff'};
    margin-bottom: 3rem;

    @media (max-width: 720px) {
        padding: 10px;
        font-size: 18px;
        text-align: center;
    }
`
export const Tabs = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`
interface ITab {
    active?: boolean;
}
export const Tab = styled.button<ITab>`
    width: 100px;
    height: 48px;

    border: 0;
    border-radius: ${({ theme }) => theme.borders.main};

    background: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.background};
    color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.gray_200};
    font-weight: 500;

    cursor: pointer;
`
export const Form = styled.form`
    width: 100%;
    max-width: 800px;

    display: flex;
    gap: 1rem;

    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borders.main};
    padding: 10px;

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        background: none;
    }
`
export const Type = styled.div`
    width: 180px;
    border-right: 1px solid #d3d3d3;
    
    
    button {
        border: 0!important;
        font-weight: 400;
    }

    @media (max-width: 720px) {
        border: none;
        width: 100%;

        button {
            border: 0.5px solid #dfdfdf;
        }
    }
`
export const ButtonScroll = styled.button`
    position: absolute;
    bottom: 1rem;
    background: transparent;
    border: 0;
    cursor: pointer;

    svg {
        font-size: 2rem;
        color: #fff;
    }
`
export const Input = styled.input`
    flex: 1;
    border: 0;
    font-size: .875rem;

    :focus {
        border: 0;
        box-shadow: 0;
        outline: 0;
    }

    @media (max-width: 720px) {
        border: 0.5px solid #dfdfdf;
        padding: 12.5px 10px;
        border-radius: ${({ theme }) => theme.borders.main};

        :focus {
            border: 0.5px solid #dfdfdf;
        }
    }
`
export const ButtonSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 6px;
    padding: 0 25px;

    svg {
        width: 17px;
        height: 17px;
    }

    height: 48px;
    border: 0;
    border-radius: ${({ theme }) => theme.borders.main};

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;

    cursor: pointer;
`
export const BackgroundSection = styled.div`
    height: 300px;
    width: 100%;

    position: absolute;
    overflow: hidden;
    z-index: -1;
    background: #222;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .5;
    }
`
export const LinkButton = styled(Link)`
    margin-top: 40px;
    padding: 10px 15px;
    border-radius: ${({ theme }) => theme.borders.main};
    background-color: #ddd;

    :hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: #fff;
    }
`

export const TypePropertyContent = styled.div`
    background-color: #fff;
    border-radius: ${({ theme }) => theme.borders.main};
    display: flex;

    div {
        display: flex;
    }

    @media (max-width: 720px) {
        div {
            display: flex;
            flex-direction: column;
        }
    }
`