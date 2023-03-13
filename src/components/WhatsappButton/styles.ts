import styled from "styled-components";

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 998;
    bottom: 16px;
    right: 16px;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    background: ${({theme}) => theme.colors.success};

    svg {
        font-size: 24px;
        color: #fff;
    }
`