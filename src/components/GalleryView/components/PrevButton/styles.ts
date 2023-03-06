import styled from "styled-components";

export const Button = styled.button`
    position: absolute;
    left: -32px;
    width: 32px;
    height: 32px;
    border: 0; 
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.colors.primary};
    cursor: pointer;
    svg {
        color: ${({theme}) => theme.colors.white};
        font-size: 24px;
    }
    &:disabled {
        background: ${({theme}) => theme.colors.gray_500};
        svg {
            color: ${({theme}) => theme.colors.gray_400};
        }
    }
`