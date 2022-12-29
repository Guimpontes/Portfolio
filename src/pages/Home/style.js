import styled from 'styled-components';

export const Introduce1 = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (min-width: 481px) {
       width: 480px;
   }
`

export const Introduce1Text = styled.p`
    font-size: 1.4rem;
    font-weight: 700;

     span:last-child {
        font-size: 0.80rem;
        white-space: nowrap
    }

    @media screen and (max-width: 350px) {
        font-size: 1.3rem;

        span:last-child {
            font-size: 0.7rem;
        }
    }

    @media screen and (min-width: 481px) {
        font-size: 1.8rem;

        span:last-child {
            font-size: 1rem
        }
   }
`
export const Introduce1Img = styled.div`
    width: 130px;
    height: 120px;

    img {
        width: 100%;
        height: 100%;
    }

   
    @media screen and (max-width: 350px) {
        width: 120px;
        height: 110px;
    }

     @media screen and (min-width: 481px) {
        width: 150px;
        height: 140px;
    }
`
export const IntroduceMySelf = styled.section`
    width: 100%;
    margin-top: 80px;

    h2 {
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 40px;
    }

    p {
        font-size: 0.98rem;
        font-weight: 600;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 350px) { 
        h2 {
            font-size: 1.2rem;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media screen and (min-width: 481px) {
        h2 {
            text-align: start;
        }
    }
`

export const FindOn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h2 {
        font-size: 1.3rem;
        font-weight: 700;
    }
`

export const SocialIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: none;
`

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a {
        text-decoration: none;
        cursor: none;
    }

    i {
        font-size: 1.5em;
        color: ${(props) => props.theme.colors.text};
    }

    @media screen and (min-width: 768px) {
        cursor: pointer;
    }
`