import styled from "styled-components";

interface Props {
    checked: boolean;
}

export const CheckboxContainer = styled.div<Props>`
    height: 42px;
    padding: 8px!important;
    border-radius: ${({ theme }) => theme.borders.main};

    width: 100%;
    align-items: center;
    gap: 16px;
    display: flex;
    justify-content: flex-start!important;
    cursor: pointer!important;

    :hover {
        background: #fafafa;
    }
`;
export const Text = styled.label<Props>`
    height: 23px;
    margin-right: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer!important;
`;
export const StyledCheckbox = styled.label<Props>`
    cursor: pointer!important;
    width: 26px;
    height: 26px;
    border-radius: ${({ theme }) => theme.borders.main};
    background: ${props => props.checked ? ({ theme }) => theme.colors.primary : "#fff"};
    svg {
        color: ${props => props.checked ? '#fafafa' : "#333"};
    }
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        padding: 1px!important;

        display: ${props => props.checked ? 'flex' : 'none'};
        filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg) brightness(105%) contrast(68%);
    }
`;