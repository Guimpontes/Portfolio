import React, { useContext, useState } from 'react';
import * as C from './style';
import { ThemeContext } from 'styled-components';
import NavBar from '../../components/NavBar'

export default function Header({ toggleTheme }) {
    const { color, title } = useContext(ThemeContext);
    const [showNavBar, setShowNavBar] = useState(false);

    function onOpenNavBar() {
        setShowNavBar(!showNavBar);
    }


    return (

        <>
            <NavBar showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
            <C.Header>
                <C.Container>
                <C.Brand>GMP</C.Brand>
                <C.BtnContainer>
                    <C.Button onClick={toggleTheme}>
                        <i className={title === "light" ? "uil uil-sun" : "uil uil-wind-moon"}></i>
                    </C.Button>

                    <C.ButtonMenu onClick={onOpenNavBar}>
                        <i className={showNavBar ? "uil uil-times" : "uil uil-apps"}></i>

                    </C.ButtonMenu>
                </C.BtnContainer>
                </C.Container>
            </C.Header>
        </>
    )
}
