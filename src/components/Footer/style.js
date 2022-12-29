import styled from "styled-components";

export const Footer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #733702;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FooterLinks = styled.div`

    a {
        font-size: 1.5em;
        color: #F2F2F2;
        margin-right: 10px;
    }
    
    i:last-child {
        margin-right: 0;
    }
`

export const FooterCredits = styled.div`
    h3 {
        font-size: 1rem;
        color: #F2F2F2;
    }
`
