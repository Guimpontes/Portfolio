import styled from "styled-components";

export const AlertContainer = styled.div`
    max-width: 300px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
    padding: 20px;
    position: fixed;
    top: ${(props) => props.show ? "70px" : "-100%" } ;
    margin: 0px 5px;
    transition: all 0.6s ease;
    z-index: 300;
`
export const AlertContent = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    color: #F2F2F2;

    @media screen and (max-width: 350px) {
        font-size: 0.9rem;
    }
`