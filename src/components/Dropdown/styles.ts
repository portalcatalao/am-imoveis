import styled from "styled-components"

export const Container = styled.div`
    position: relative;
`
export const DropdownButton = styled.span`
    height: 40px;

    background: transparent;
    border: 0;

    font-size: 1rem;

    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        margin-left: .5rem;
    }
`
export const DropdowBody = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    width: fit-content;

    padding: 1rem;
    background: #fff;
    border: .5px solid #d3d3d3;
    border-radius: 6px;
    top: 100%;
    right: 0;

    a {
        width: max-content;
        height: 40px;
        display: flex;
        align-items: center;

        font-size: .875rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.gray_200};

        transition: .2s;

        :hover {
            color: ${({theme}) => theme.colors.primary};
        }
    }
`