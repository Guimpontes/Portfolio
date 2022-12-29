import styled from "styled-components";

export const Footer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #733702;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const FooterCredits = styled.div`
    width: 33%;

    h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #F2F2F2;
    }
`

export const FoooterCopyRight = styled.div`
    width: 33%; 
    text-align: center;

    h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #F2F2F2;
    }
`

export const FooterLinks = styled.div`
    width: 33%;
    text-align: end;

    a {
        font-size: 1.5em;
        color: #F2F2F2;
        margin-right: 10px;
    }
    
    i:last-child {
        margin-right: 0;
    }
`
