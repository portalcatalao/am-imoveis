import styled, { css } from "styled-components";

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 72px;
`
interface INavbar {
    top?: boolean;
}
export const Navbar = styled.nav<INavbar>`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.5rem;

    background: ${({theme, top}) => top ? 'transparent' : theme.colors.white};

    color: ${({theme, top}) => top ? theme.colors.white : theme.colors.gray_200} !important;
    box-shadow: ${({top}) => top ? 'none' : '0px 1px 4px 0px rgba(0, 0, 0, 0.09)'} !important;
    
`
export const Brand = styled.nav`
    height: 48px;
    img {
        height: 100%;
        width: unset !important;
    }
`
export const Links = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    gap: 2rem;
    
    a {
        font-size: 1rem;
    }
`
export const Button = styled.button`
    height: 48px;

    padding: 0 2rem;

    border: 0;
    border-radius: ${({theme}) => theme.borders.border_p};

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;

    cursor: pointer;
`