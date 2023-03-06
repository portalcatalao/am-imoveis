import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000000f0;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
`
export const Image = styled.img`

`
export const ButtonClose = styled.button`
    position: fixed;
    right: 1.5rem;
    top: 1.5rem;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 8px;
    background: ${({theme}) => theme.colors.danger};
    cursor: pointer;
    svg {
        color: #fff;
        font-size: 1.125rem;
    }
`