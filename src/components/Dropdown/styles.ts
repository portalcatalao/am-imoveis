import styled from "styled-components"

export const Container = styled.li`
    position: relative;
`
export const DropdownButton = styled.button`
    height: 40px;

    background: transparent;
    border: 0;

    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    svg {
        margin-left: .5rem;
    }

    @media (max-width: 1020px) {
        font-weight: 500;
    }
`
export const DropdowBody = styled.span`
    position: absolute;
    z-index: 999;

    display: flex;
    flex-direction: column;
    width: fit-content;

    padding: 1rem;
    background: #fff;
    border: .5px solid #d3d3d3;
    border-radius: ${({ theme }) => theme.borders.main};
    top: 100%;
    right: 0;

    a {
        width: max-content;
        display: flex;
        align-items: center;

        font-size: .875rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.gray_200};

        transition: .2s;
        background: none!important;

        :hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    @media (max-width: 1020px) {
        position: initial;
        left: 0;
        margin-top: 8px;
        width: 100%;
        
        a {
            font-weight: 400;
        }
    }
`