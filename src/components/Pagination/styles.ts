import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: .5rem;
`
interface IButton {
    active?: boolean;
}
export const Button = styled.button<IButton>`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 8px;
    font-weight: 300;
    background: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.gray_500};
    color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.gray_200};
`