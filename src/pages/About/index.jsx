import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import * as C from './style';
import aboutImg from '../../assets/img/about/about-img.svg'


export default function About() {
    return (
        <Container>
            <C.PageTitle>ABOUT ME</C.PageTitle>

            <C.AboutSection>
                <C.LittleMore>

                    <h2>A little more about me</h2>

                    <C.AboutImg>
                        <img src={aboutImg} alt="about" />
                        <a href="http://www.freepik.com" target="_blank" rel="noreferrer">Designed by Freepik</a>
                    </C.AboutImg>

                    <p>Hi, <span>I'm Guilherme Mota Pontes</span>, i'm nineteen yers old and i live in Lençóis Paulista - São Paulo - Brazil.</p>

                    <p>I'm a <span>junior Full Stack web developer.</span></p>


                    <p>I started studying Full Stack web development in 2022. Professor <span>Henrique Oliveira from the ProgramadorBr course</span> was the one who guided me on this journey.</p>

                </C.LittleMore>

                <C.SpareTime>
                    <h2>Things i like to do in my spare time</h2>

                    <p>-Learning new programming languages.</p>
                    <p>-Listen to eletronic music.</p>
                    <p>-I alse like to play fps games, simulator, puzzle, among others.</p>
                </C.SpareTime>

                <C.Goals>
                    <h2>MY <span>GOALS</span></h2>

                    <p>1º - Become a great programmer.</p>
                    <p>2º - Retire my parents.</p>
                    <p>3º - Having my own house, car and family.</p>
                    <p>4º - Being able to have the opportunity to work outside Brazil.</p>
                    <p>5º - Getting to know many different cultures.</p>

                    <p>Don't worry, i'm not going to make a fifty-line list.</p>
                </C.Goals>

                <C.Skils>
                    <h2>MY <span>SKILLS</span></h2>

                    <C.FrontEnd>
                        <h3 translate="no">FRONT END <i className="uil uil-desktop-alt"></i></h3>

                        <C.FrontEndContainer>
                            <C.FrontEndSkills>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" atl="html5 icon" />
                            </C.FrontEndSkills>

                            <C.FrontEndSkills>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" atl="css3 icon" />
                            </C.FrontEndSkills>

                            <C.FrontEndSkills>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" atl="bootstrap" />
                            </C.FrontEndSkills>

                            <C.FrontEndSkills>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" atl="react icon" />
                            </C.FrontEndSkills>

                            <C.FrontEndSkills>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" atl="javascript icon" />
                            </C.FrontEndSkills>
                        </C.FrontEndContainer>
                    </C.FrontEnd>

                    <C.BackEnd>
                        <h3 translate="no">BACK END <i className="uil uil-server"></i></h3>

                        <C.BackEndContainer>
                            <C.BackEnSkills>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase icon" />
                            </C.BackEnSkills>

                            <C.BackEnSkills>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb icon" />
                            </C.BackEnSkills>

                            <C.BackEnSkills>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs icon" />
                            </C.BackEnSkills>
                        </C.BackEndContainer>
                    </C.BackEnd>

                    <C.Tolls>
                        <h3><span>TOOLS</span> I USE</h3>

                        <C.TollsContainer>
                            <C.TollsIcon>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode icon" />
                            </C.TollsIcon>

                            <C.TollsIcon>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" atl="git icon" />
                            </C.TollsIcon>

                            <C.TollsIcon>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="window icon" />
                            </C.TollsIcon>
                        </C.TollsContainer>
                    </C.Tolls>
                </C.Skils>
            </C.AboutSection>
        </Container>
    )
}
