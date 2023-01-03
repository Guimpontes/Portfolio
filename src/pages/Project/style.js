import styled from "styled-components";

export const TitlePage = styled.h1`
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 50px;
`

export const ProjectIntroduce = styled.div`
    margin-bottom: 100px;
  

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    }
`
export const ProjectIntroduceText = styled.div`
    p {
            font-size: 0.98rem;
            font-weight: 600;
            margin-bottom: 30px;
    }

    
    @media screen and (max-width: 350px) {
         p {
             font-size: 0.9rem;
         }
    }

`

export const ProjectIntroduceImg = styled.div`
    display: none;
    text-align: center;

    img {
            width: 250px;
            height: 250px;
        }

        a {
            color: ${(props) => props.theme.colors.secondary};
            font-size: 0.9rem;
         }

     @media screen and (min-width: 768px) {
        display: block;
    }

`

export const Projects = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;

    @media screen and (min-width: 1200px) {
        justify-content: flex-start;
    }
`
export const ProjectContainer = styled.div`
    max-width: 330px;
    width: 100%;
    height: 420px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`
export const ProjectImg = styled.div`
    width: 100%;
    
    img {
        width: 100%;
    }
`
export const ProjectTitle = styled.div`
    h2 {
        font-size: 1rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.secondary};
        text-align: center;
    }
`
export const ProjectDescription = styled.div`
    p {
        font-size: 0.9rem;
        padding: 0px 10px;
    }
`
export const ProjectLanguages = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 10px;
   

    h3 {
        display: inline-block;
        font-size: 0.9rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.secondary};
    }

    img {
        width: 24px;
        height: 24px;
    }
    

`
export const ProjectButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    margin-bottom: 15px;

    a {
        width: 100px;
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.text};
        border: none;
        border-radius: 5px;
        font-size: 0.98rem;
        font-weight: 700;
        text-align: center;
        text-decoration: none;

        i {
            line-height: 35px;
        }
    }
`
export const ProjectConsiderations = styled.div`
    p {
        font-size: 0.98rem;
        font-weight: 600;
        margin-bottom: 30px;

        a {
            text-decoration: underline;  
            text-decoration-color: ${(props) => props.theme.colors.secondary}
        }
    }

    @media screen and (max-width: 350px) {
        p {
            font-size: 0.9rem;
        }
    }
`
