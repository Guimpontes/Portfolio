import styled from 'styled-components';


export const GridContainer = styled.div`
    width: 100%;
    height: 230px;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0px 1px 2px ${(props => props.theme.colors.shadow_color)};
    border-radius: 0px 0px 10px 10px;
    display: grid;
    grid-template-columns: .9fr .9fr .9fr;
    align-items: center;
    text-align: center;
    transition: top 0.6s ease, background-color 0.3s ease;
    position: fixed;
    top: ${(props) => props.visible ? "50px" : "-100%"};
    z-index: 300;

    @media screen and (min-width: 768px) {
        width: 500px;
        height: 50px;
        border-radius: 0px;
        box-shadow: none;
        top: 0px;
        z-index: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const GridItem = styled.div`
    font-size: 0.9rem;
    font-weight: 700;
    
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
        cursor: none;
    }

    i {
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px) {

        a {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.8rem;
            transition: color 0.3s;
            cursor: pointer;

            :hover {
                color: ${(props) => props.theme.colors.secondary};
            }
        }
        

        i {
            font-size: 1.2rem;
        }
        
    }
`