import styled from "styled-components";

export const Footer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #733702;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 350px) {
        height: 80px;
        padding: 0px 5px;
    }
`
export const FooterCredits = styled.div`
    width: 33%;

    h3 {
        font-size: 0.8rem;
        font-weight: 600;
        color: #F2F2F2;
    }

    @media screen and (min-width: 768px) {

        h3 {
            font-size: 1rem;
        }
    }
`

export const FoooterCopyRight = styled.div`
    width: 33%; 
    text-align: center;

    h3 {
        font-size: 0.8rem;
        font-weight: 600;
        color: #F2F2F2;
    }

    @media screen and (min-width: 768px) {

        h3 {
            font-size: 1rem;
        }
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

    @media screen and (max-width: 350px) {
        width: 20%;

        h3 {

        }
}
`
