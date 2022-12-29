import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import * as C from './style';
import countDownPage from '../../assets/img/project/countdown-page.svg';
import loginFormPage from '../../assets/img/project/loginForm-page.svg';
import moviePage from '../../assets/img/project/movies-page.svg';
import blogPage from '../../assets/img/project/blog-page.svg';

import projectPage from '../../assets/img/project/project-page.svg'


export default function Project() {
    return (
        <Container>
            <C.TitlePage>PROJECT</C.TitlePage>

            <C.ProjectIntroduce>
                <C.ProjectIntroduceText>
                    <p>On this page i'll show you some <span>projects i've done</span> and some <span>projects i'm working on.</span></p>

                    <p>Some projects may not be very professional, because they were done when i was in the beginning, but i'll post them anyway so you <span>you can see my evolution.</span></p>
                </C.ProjectIntroduceText>

                <C.ProjectIntroduceImg>
                    <img src={projectPage} />
                <a href="http://www.freepik.com" target="_blank">Designed by slidesgo / Freepik</a>
                </C.ProjectIntroduceImg>
            </C.ProjectIntroduce>

            <C.Projects>
                <C.ProjectContainer>
                    <C.ProjectImg>
                        <img src={countDownPage} alt="countdown page" />
                    </C.ProjectImg>

                    <C.ProjectTitle>
                        <h2>COUNTDOW PAGE</h2>
                    </C.ProjectTitle>

                    <C.ProjectDescription>
                        <p>This site count down the launch of a site. This site was created from the project passed by the Rocketseat school, for the studend to train their skills.</p>
                    </C.ProjectDescription>

                    <C.ProjectLanguages>
                        <h3>Languages:</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    </C.ProjectLanguages>

                    <C.ProjectButtons>
                        <a href="https://github.com/Guimpontes/Countdown-page" target="_blank" translate="no"><i className="uil uil-github"></i> Github</a>
                        <a href="https://guimpontes.github.io/Countdown-page/" target="_blank" translate="no"><i className="uil uil-file-alt"></i> Demo</a>
                    </C.ProjectButtons>
                </C.ProjectContainer>

                <C.ProjectContainer>
                    <C.ProjectImg>
                        <img src={loginFormPage} alt="login page" />
                    </C.ProjectImg>

                    <C.ProjectTitle>
                        <h2>LOGIN PAGE</h2>
                    </C.ProjectTitle>

                    <C.ProjectDescription>
                        <p>You must be asking youself. Why does it have a login page but no registration page. Well, when i was starting out, i would simply take a ready mede design, turn it into code and stop there.</p>
                    </C.ProjectDescription>

                    <C.ProjectLanguages>
                        <h3>Languages:</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    </C.ProjectLanguages>

                    <C.ProjectButtons>
                        <a href="https://github.com/Guimpontes/Login-Page" target="_blank" translate="no"><i className="uil uil-github"></i> Github</a>
                        <a href="https://guimpontes.github.io/Login-Page/" target="_blank" translate="no"><i className="uil uil-file-alt"></i> Demo</a>
                    </C.ProjectButtons>
                </C.ProjectContainer>

                <C.ProjectContainer>
                    <C.ProjectImg>
                        <img src={moviePage} alt="movie synopsis page" />
                    </C.ProjectImg>

                    <C.ProjectTitle>
                        <h2>FILME.NET</h2>
                    </C.ProjectTitle>

                    <C.ProjectDescription>
                        <p>This is a simple movie synopsis site. It doesn't have many navigation page as i was praticing using bootstrap.</p>
                    </C.ProjectDescription>

                    <C.ProjectLanguages>
                        <h3>Languages:</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                    </C.ProjectLanguages>

                    <C.ProjectButtons>
                        <a href="https://github.com/Guimpontes/Filmes-page" target="_blank" translate="no"><i className="uil uil-github" ></i> Github</a>
                        <a href="https://guimpontes.github.io/Filmes-page/" target="_blank" translate="no"><i className="uil uil-file-alt"></i> Demo</a>
                    </C.ProjectButtons>
                </C.ProjectContainer>

                <C.ProjectContainer>
                    <C.ProjectImg>
                        <img src={blogPage} alt="blog page" />
                    </C.ProjectImg>

                    <C.ProjectTitle>
                        <h2>BLOG PAGE</h2>
                    </C.ProjectTitle>

                    <C.ProjectDescription>
                        <p>This as very simple bogging site. The desing was also provided by the Rocketseat school.</p>
                    </C.ProjectDescription>

                    <C.ProjectLanguages>
                        <h3>Languages:</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    </C.ProjectLanguages>

                    <C.ProjectButtons>
                        <a href="https://github.com/Guimpontes/Blog-page" target="_blank" translate="no"><i className="uil uil-github"></i> Github</a>
                        <a href="https://guimpontes.github.io/Blog-page/" target="_blank" translate="no"><i className="uil uil-file-alt"></i> Demo</a>
                    </C.ProjectButtons>
                </C.ProjectContainer>
            </C.Projects>

            <C.ProjectConsiderations>
                <p>I don't have more complex project yet, <span>but as i develop more project, i'll post them here.</span></p>

                <p>There are more project in my github repository. <a href="https://github.com/Guimpontes?tab=repositories" target="_blank"><span>View more</span></a></p>
            </C.ProjectConsiderations>
        </Container>
    )
}
