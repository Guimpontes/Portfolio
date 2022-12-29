import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    transition: 0.3s;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 1px 2px ${props => props.theme.colors.shadow_color};
    position: sticky;
    top: 0;
    z-index: 400;
`

export const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Brand = styled.h1`
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
`

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const Button = styled.button`
    width: 70px;
    height: 35px;
    border: none;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.theme_color_btn};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    color: #F2F2F2;

    @media screen and (min-width: 768px) {
        cursor: pointer;
    }
`

export const ButtonMenu = styled.button`
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.7rem;
    
    @media screen and (min-width: 768px) {
        display: none;
    }
`