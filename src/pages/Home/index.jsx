import React from 'react';

import DeveloperSVG from '../../assets/developer.svg';

import { Container, Banner, Content, MainText, ImageWrapper } from './styles';

const Home = () => (
    <Container id="home">
        <Banner>
            <Content>
                <div>
                    <h1>
                        Hi,
                        <br />
                        I am
                        <br />
                        <MainText>Luiz.</MainText>
                    </h1>
                    <h2>I am a fullstack web developer</h2>
                </div>

                <ImageWrapper>
                    <img
                        src={DeveloperSVG}
                        alt='A man using a computer, representing a developer'
                    />
                </ImageWrapper>
            </Content>
        </Banner>
    </Container>
);

export default Home;
