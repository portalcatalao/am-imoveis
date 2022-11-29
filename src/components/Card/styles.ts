import styled from "styled-components";
import Link from 'next/link';

export const Container = styled(Link)`
    position: relative;
    display: flex;

    width: 280px;
    min-width: 280px;
    height: 360px;
    
    color: #fff;

    border: 0.5px solid #ebebeb;
    border-radius: ${({ theme }) => theme.borders.border_p};
    background: ${({ theme }) => theme.colors.white};

    img {
        transition: transform .2s
    }

    :hover {
        img {
            transform: scale(1.1);
        }
    }
`

export const CardHeader = styled.div`
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    gap: 3px;

    width: 100%;
    padding: 20px;
    border-radius: ${({ theme }) => theme.borders.border_p};
`

export const Category = styled.div`
    padding: 3px 8px;

    font-size: 12px;
    text-align: center;

    background-color: #262937;
    border-radius: ${({ theme }) => theme.borders.border_p};
`

export const TagPrice = styled.div`
    width: 100%;
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 18px;
`

export const Thumbnail = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    overflow: hidden;
    border-radius: ${({ theme }) => theme.borders.border_p};
`

export const Mask = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, rgba(38, 41, 55, 0) 0%, rgba(38, 41, 55, 0) 45%, rgba(38, 41, 55, 0.8) 80%, rgba(38, 41, 55, 0.9) 100%);
`

export const CardBody = styled.div`
    position: absolute;
    bottom: 0;

    width: 100%;
    padding: 20px;
`

export const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
`

export const Address = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
`

export const Resume = styled.ul`
    margin-top: 10px;
    width: 100%;
    display: flex;
    list-style-type: none;
    font-size: 14px;
    justify-content: space-between;

    li {
        display: flex;
        gap: 8px;
        align-items: center;
    }
`