import styled from "styled-components";

export const PageTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 50px;
`

export const AboutImg = styled.div`
    float: right;
    width: 330px;
    height: 320px;
    display: none;
    text-align: center;

    img {
        width: 100%;
        height: 80%
    }

    a {
        color: ${(props) => props.theme.colors.secondary};
        font-size: 0.9rem;
    }

    @media screen and (min-width: 768px) {
        display: block;
    }
`

export const AboutSection = styled.section`
`

export const LittleMore = styled.div`
    margin-bottom: 60px;

    h2 {
            font-size: 1rem;
            font-weight: 700;
            text-align: center;
            color: ${(props) => props.theme.colors.secondary};
            margin-bottom: 40px;
        }

    p {
            font-size: 0.98rem;
            font-weight: 600;
            margin-bottom: 40px;
        }

        @media screen and (max-width: 350px) {
            p {
                font-size: 0.9rem;
            }
        }
`

export const SpareTime = styled.div`
    margin-bottom: 60px;

    h2 {
        font-size: 1rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.secondary};
        margin-bottom: 30px;
    }

    p {
        font-size: 0.98;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 350px) {
            p {
                font-size: 0.9rem;
            }
    }
`

export const Goals = styled.div`
    margin-bottom: 60px;

    h2 {
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 35px;
    }

    p {
        margin-bottom: 25px;
    }

    p:last-child {
        font-weight: 700;
        text-align: center;
    }

    @media screen and (max-width: 350px) {
            p {
                font-size: 0.9rem;
            }
    }
    @media screen and (min-width: 481px) {
            p:last-child {
                font-weight: 700;
                text-align: start;
            }   
    }

`

export const Skils = styled.div`
    h2 {
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 40px;
    }
`

export const FrontEnd = styled.div`
    margin-bottom: 60px;

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 35px;

        i {
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 768px) {

        h3 {
            text-align: start;
        }
    }
`
export const FrontEndContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

export const FrontEndSkills = styled.div`
    width: 75px;
    height: 75px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    
    img {
        width: 70%;
        height: 70%;
    }

    @media screen and (min-width: 768px) {
        :hover {
            background-color: rgba(242, 135, 5, 0.5);
            transform: scale(1.05)
        }
    }
`

export const BackEnd = styled(FrontEnd)`
`
export const BackEndContainer = styled(FrontEndContainer)`
`
export const BackEnSkills = styled(FrontEndSkills)`
`

export const Tolls = styled(FrontEnd)`
    margin-bottom: 30px;
`
export const TollsContainer = styled(FrontEndContainer)`
`
export const TollsIcon = styled(FrontEndSkills)`
`



