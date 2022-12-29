import React from 'react';
import { ButtonTop } from './style';

export default function ButtonScrollTop({showButtonScroll}) {

    function scrollTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <ButtonTop onClick={scrollTop} visible={showButtonScroll} ><i className="uil uil-arrow-up"></i></ButtonTop>
    )
}
