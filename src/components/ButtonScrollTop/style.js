import styled from "styled-components";

export const ButtonTop = styled.button`
    width: 30px;
    height: 35px;
    background-color: ${(props) => props.theme.colors.secondary};
    border: none;
    border-radius: 5px;
    color: #F2F2F2;
    position: fixed;
    bottom: ${(props) => props.visible ? "70px" : "-100px"};
    right: 10px;
    transition: bottom 0.3s ease;

    i {
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px) {
        cursor: pointer;
    }
`