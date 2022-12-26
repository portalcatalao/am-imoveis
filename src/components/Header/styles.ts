import styled from "styled-components";

interface Props {
    open?: boolean;
}

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 72px;
`
export const TestDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background: rgba(0,0,0,.5);
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

    background: ${({ theme, top }) => top ? 'transparent' : theme.colors.white};

    a, button {
        color: ${({ theme, top }) => top ? theme.colors.white : theme.colors.gray_200};
    }

    @media (max-width: 1020px) {
        a, button {
            color: ${({ theme }) => theme.colors.gray_200};
        }
    }

    box-shadow: ${({ top }) => top ? 'none' : '0px 1px 4px 0px rgba(0, 0, 0, 0.09)'} !important;
`
export const Brand = styled.div`
    height: 48px;

    img {
        height: 100%;
        width: unset !important;
    }
`
export const Links = styled.ul<Props>`
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    gap: 1.2rem;

    a {
        width: 100%;
        display: flex;
        font-size: 1rem;
        padding: 8px;
    }

    @media (max-width: 1020px) {
        position: fixed;
        right: 0;
        top: 0;

        height: 100vh;
        width: 280px;

        color: #333;
        background-color: #f1f1f1;
        flex-flow: column nowrap;
        align-items: flex-start;

        z-index: 10;

        padding: 28px;
        padding-top: 80px;

        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s linear;

        a {
            font-weight: 500;
            background-color: #ebebeb;
            border-radius: ${({ theme }) => theme.borders.main};
        }

        li {
            width: 100%;

            button {
                width: 100%;
                background-color: #ebebeb;
                padding: 12px;
                border-radius: ${({ theme }) => theme.borders.main};
            }
        }
    }
`
export const Button = styled.button`
    height: 48px;
    padding: 0 2rem;

    border: 0;
    border-radius: ${({ theme }) => theme.borders.main};

    background: ${({ theme }) => theme.colors.primary}!important;
    color: ${({ theme }) => theme.colors.white}!important;
    font-weight: 500;

    cursor: pointer;
`
export const MenuMobile = styled.button`
    border: 0;

    display: none;
    @media (max-width: 1020px) {
        display: flex;
    }

    color: #fff!important;

    svg {
        width: 25px;
        height: 25px;
    }

    z-index: 999;
    
    flex-direction: column;
    row-gap: 6px;
    padding: 8px;

    border-radius: ${({ theme }) => theme.borders.main};
    background: ${({ theme }) => theme.colors.primary};
`