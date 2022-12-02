import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 72px;
    padding: 2rem 1.5rem;
    background-color: #fafafa;

    span {
        font-weight: 300;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

export const Content = styled.div`
    display: grid;
    width: 100%;
    min-height: 500px;
    margin-top: 30px;

    grid-template-columns: 350px 1fr;
    grid-gap: 20px;
`

export const Filter = styled.form`
    background-color: #fff;
    padding: 30px;
    padding-bottom: 50px;
    border: 1px solid rgb(235, 235, 235);

    border-radius: 6px;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
        columns: #333;
        font-weight: 500;
    }

    button {
        padding: 0 20px!important;
        width: 100%!important;
        font-weight: 400;
        border-radius: 6px;
    }

    input {
        height: 45px;
        padding-left: 20px;
        font-size: 14px;
        font-weight: 400;

        border: 1px solid #d3d3d3;
        border-radius: 8px;
        
        ::placeholder {
            color: #333;
        }
    }

    div {
        display: flex;
        justify-content: center;
        gap: 16px;
        align-items: center;

        button {
            width: 80px;
            padding: 8px 0;
        }

        input {

            width: 100%;
        }
    }
`

export const Search = styled.div`
    width: 100%;
    height: 45px;
    margin-bottom: 20px;

    button {
        cursor: pointer;

        padding: 10px 15px!important;

        width: 48px!important;
        height: 100%!important;

        font-size: 18px;
        border: 0;

        color: #222;
        background-color: #f8f8f8;
        border: 1px solid rgb(235, 235, 235);


        :hover {
            background-color: ${({ theme }) => theme.colors.primary};
            color: #fff;
        }
    }
`

export const Tabs = styled.div`
    display: flex;
    gap: 1rem;
`

interface ITab {
    active?: boolean;
}

export const Tab = styled.button<ITab>`
    width: 100px;
    height: 38px;
    padding: 8px 0;
    border: 1px solid rgb(235, 235, 235);
    border-radius: ${({ theme }) => theme.borders.border_p};
    background: ${({ theme, active }) => active ? '#262937' : theme.colors.background};
    :hover {
        background: ${({ theme, active }) => active ? '#262937' : theme.colors.primary};
        color: #fff;
    }
    color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.gray_200};
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;

`

export const Results = styled.div`
    h3 {
        font-size: 18px;
        color: #333;
        font-weight: 500;
    }
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    width: 100%;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 8px;
    border: 1px solid rgb(235, 235, 235);
`

export const Properties = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.5rem;
    justify-content: space-between;
`

export const Right = styled.div`
    display: flex;
    flex-direction: row!important;
    align-items: center;
    gap: 6px;

    p {
        display: flex;
        gap: 10px;
    }
`

export const Bot = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 30px;


    li {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(235, 235, 235);
    

        :nth-child(3) {
            background-color: #262937;
            color: #fff;
        }

        :first-child, :last-child {
            border: 1px solid #EC700F;
            color: #EC700F;
        }

        :hover {
            cursor: pointer;
            background-color: #EC700F;
            color: #fff;
        }
    }

    
`

export const Slider = styled.div`
    position: relative;
    height: 5px;
    background-color: #dfdfdf;
    border-radius: 5px;
`

export const Progress = styled.div`
    position: absolute;
    border-radius: 5px;
    height: 5px;
    background: ${({ theme }) => theme.colors.primary};
    left: 25%;
    right: 25%;
`

export const RangeInput  = styled.div`
    position: relative;

    input {
        position: absolute;
        top: -41px;
        width: 100%;
        -webkit-appearance: none;
        background: none;
        border: none;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: 50%;
        height: 50px;
        border-radius: 50%;
        -webkit-appearance: 50%;
    }
`

export const RangeMin = styled.input``
export const RangeMax = styled.input``