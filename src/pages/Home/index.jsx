import React from 'react';
import * as C from './style';
import imgProfile from '../../assets/img/portfolio/portfolio-img.svg';
import { Container } from '../../styles/GlobalStyles';


export default function Home() {
  return (
      <Container>

        <C.Introduce1>
          <C.Introduce1Text>
            HI, <br />
            I'M <span>GUILHERME</span> <br />
            <span>FULL STACK WEB DEVELOPER</span>
          </C.Introduce1Text>

          <C.Introduce1Img>
            <img src={imgProfile} atl="image profile" />
          </C.Introduce1Img>
        </C.Introduce1>

        <C.IntroduceMySelf>
          <h2>LET ME <span>INTRODUCE</span> MYSELF</h2>

          <p>I'm <span>Guilherme Mota Pontes</span> and i'm currently a <span>full stack web developer.</span></p>

          <p><span>I love to program</span> and i am dedicated to learning new technologies</p>

          <p>I'm <span>looking for an apportunity</span> to showcase my work.</p>
        </C.IntroduceMySelf>

        <C.FindOn>
          <h2><span>WHERE TO FIND ME?</span></h2>

          <C.SocialIcon>
            <C.Icon><a href="https://github.com/Guimpontes"><i className="uil uil-github"></i></a></C.Icon>
            <C.Icon><a href="https://www.linkedin.com/in/guilherme-pontes-a48a99231/"><i className="uil uil-linkedin"></i></a></C.Icon>
          </C.SocialIcon>
        </C.FindOn>
      </Container>
        )
}
