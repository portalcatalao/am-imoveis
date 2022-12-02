import styled, { css } from "styled-components";
import { Props } from "../../styles/globals";
import Link from 'next/link';

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
`
export const Title = styled.h1<Props>`
    //font-family: 'Nunito', sans-serif !important;
    font-size: ${({ fz }) => fz ?? "56px"};
    font-weight: 600;
    color: ${({ cl }) => cl ?? '#ffffff'};
`
export const Subtitle = styled.p<Props>`
    //font-family: 'Nunito', sans-serif !important;
    font-size: ${({ fz }) => fz ?? "1.2rem"};
    color: ${({ cl }) => cl ?? '#ffffff'};
    margin-bottom: 3rem;
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
    border-radius: ${({ theme }) => theme.borders.border_p};

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
    border-radius: ${({ theme }) => theme.borders.border_p};
    padding: 10px;
`
export const Type = styled.div`
    width: 180px;
    border-right: .5px solid #A4A4A4;
    button {
        border: 0;
        font-weight: 400;
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
`
export const ButtonSubmit = styled.button`
    height: 48px;

    padding: 0 2rem;

    border: 0;
    border-radius: ${({ theme }) => theme.borders.border_p};

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

export const ContentNews = styled.div`
    display: flex;
    gap: 25px;
`

export const LinkButton = styled(Link)`
    margin-top: 40px;
    padding: 10px 15px;
    border-radius: ${({ theme }) => theme.borders.border_p};
    background-color: #ddd;

    :hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: #fff;
    }
`