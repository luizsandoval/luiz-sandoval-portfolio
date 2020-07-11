import React from 'react';

import {
    faMapMarkerAlt,
    faBirthdayCake,
    faLaptopCode,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    Header,
    Summary,
    SummaryItem,
    Icon,
    Profile,
    Avatar,
} from './styles';

const About = () => {
    const getAge = () => `20 years old`;

    const getExperience = () => `2+ years of experience`;

    return (
        <Container id="about">
            <Header>
                <h1>About</h1>
                <h2>A summary about myself</h2>
            </Header>
            <Summary>
                <SummaryItem>
                    <Icon icon={faMapMarkerAlt} size="2x" />
                    <label>Sao Paulo, Brazil</label>
                </SummaryItem>
                <SummaryItem>
                    <Icon icon={faBirthdayCake} size="2x" />
                    <label>{getAge()}</label>
                </SummaryItem>
                <SummaryItem>
                    <Icon icon={faLaptopCode} size="2x" />
                    <label>{getExperience()}</label>
                </SummaryItem>
                <SummaryItem>
                    <Icon icon={faGraduationCap} size="2x" />
                    <label>Graduating in System Analysis and Development</label>
                </SummaryItem>
            </Summary>
            <Profile>
                <Avatar image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />

                <p>
                    I am a <b>fullstack web developer</b>, based on Sao Paulo,
                    Brazil. Technology lover, I have been working for more than
                    two years focused on developing applications that not only
                    bring value to the customer but also a{' '}
                    <strong>unique and friendly experience for users</strong>.
                </p>
            </Profile>
        </Container>
    );
};

export default About;
