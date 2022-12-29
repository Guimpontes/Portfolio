import styled from "styled-components";

export const ContactContent = styled.div`
    width: 100%;
    height:  400px;
    display: flex;
    justify-content: center;
    align-items: ce;
`

export const PageTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 50px;
`

export const ContactText = styled.p`
    font-size: 0.98rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
`

export const FormContact = styled.form`
    max-width: 400px;
    width: 100%;
    margin-bottom: 40px;
    margin: 0 auto;
`

export const FieldName = styled.div`
    width: 100%;
    height: 50px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    margin-bottom: 50px;
    position: relative;
    z-index: 100;
    
    input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 0.98rem;
        padding: 5px;
        color: ${(props) => props.theme.colors.text};

        :focus ~ label, :valid ~ label {
            top: -35%;
            left: 0;
            font-size: 0.95rem;
        }
    }

    label {
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.98rem;
        font-weight: 700;
        transition: all 0.3s ease;
    }
`

export const FieldEmail = styled(FieldName)`
`

export const FieldMessage = styled(FieldName)`
    height: 100%;

    textarea {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 0.98rem;
        padding: 10px;
        color: ${(props) => props.theme.colors.text};

        :focus ~ label, :valid ~ label {
            top: -10%;
            left: 0;
            font-size: 0.95rem;
        }
    }

    label {
        left: 5px;
        top: 10%;
    }
`

export const ButtonSend = styled.div`
    width: 100%;
    text-align: center;

    button {
        width: 120px;
        height: 40px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 700;
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.text};
    i {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 768px) {
        cursor: pointer;
        transition: color 0.3s ease;

        :hover {
            color: ${(props) => props.theme.colors.primary};
        }
    }
}
`