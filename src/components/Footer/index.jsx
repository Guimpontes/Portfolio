import React from 'react';
import * as C from './style';

export default function Footer() {
  return (
    <C.Footer>
      <C.FooterCredits>
        <h3>Designed and Developed by Guilherme Pontes</h3>
      </C.FooterCredits>

      <C.FoooterCopyRight>
        <h3>Copyright <i className="uil uil-copyright"></i> 2022 GMP</h3>
      </C.FoooterCopyRight>

      <C.FooterLinks>
        <a href="https://github.com/Guimpontes"><i className="uil uil-github"></i></a>
        <a href="https://www.linkedin.com/in/guilherme-pontes-a48a99231/"><i className="uil uil-linkedin"></i></a>
      </C.FooterLinks>
    </C.Footer>
  )
}
