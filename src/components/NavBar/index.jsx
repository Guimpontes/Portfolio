import React from 'react';
import * as C from './style';
import { Link } from 'react-router-dom';


export default function NavBar({ showNavBar, setShowNavBar }) {

  function hideNavBar() {
    setShowNavBar(false)
  }

  return (
    <C.GridContainer visible={showNavBar}>

      <C.GridItem onClick={hideNavBar}>
        <Link to="/">
          <i className="uil uil-estate"></i>
          <h3>Home</h3>
        </Link>
      </C.GridItem>


      <C.GridItem onClick={hideNavBar}>
        <Link to="/about">
          <i className="uil uil-user-circle"></i>
          <h3>About</h3>
        </Link>
      </C.GridItem>

      <C.GridItem onClick={hideNavBar}>
        <Link to="/project">
          <i className="uil uil-folder-network"></i>
          <h3>Project</h3>
        </Link>
      </C.GridItem>

      <C.GridItem onClick={hideNavBar}>
        <Link to="/contact">
          <i className="uil uil-message"></i>
          <h3>Contact</h3>
        </Link>
      </C.GridItem>

    </C.GridContainer>
  )
}
