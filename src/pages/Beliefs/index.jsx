import React from 'react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {
    faBullseye,
    faCode,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

import { Container, Header, Content, Item } from './styles';

const Beliefs = () => (
    <Container id="values">
        <Header>
            <h1>My beliefs</h1>
            <h2>These are my values as a professional</h2>
        </Header>
        <Content>
            <Item>
                <Icon icon={faBullseye} size='2x' />
                <label>Focus</label>
                <p>
                    Even with a lot of tools and frameworks available, is
                    important that we focus on the right technologies to solve
                    the problem and bring value to the customer as soon as
                    possible
                </p>
            </Item>
            <Item>
                <Icon icon={faCode} size='2x' />
                <label>Clean Code</label>
                <p>
                    A clean, performatic and human readable code avoid headaches
                    in future maintenances and is a fundamental part of being a
                    good developer
                </p>
            </Item>
            <Item>
                <Icon icon={faLightbulb} size='2x' />
                <label>Continuos Improvement</label>
                <p>
                    As a developer, is essential that we keep learning and
                    improving our skills, this way we can expand our ability to
                    solve problems and guarantee that we will always bring the
                    best solution to our customers
                </p>
            </Item>
            <Item>
                <Icon icon={faBullseye} size='2x' />
                <label>Focus</label>
                <p>
                    Even with a lot of tools and frameworks available, is
                    important that we focus on the right technologies to solve
                    the problem and bring value to the customer as soon as
                    possible
                </p>
            </Item>
            <Item>
                <Icon icon={faCode} size='2x' />
                <label>Clean Code</label>
                <p>
                    A clean, performatic and human readable code avoid headaches
                    in future maintenances and is a fundamental part of being a
                    good developer
                </p>
            </Item>
            <Item>
                <Icon icon={faLightbulb} size='2x' />
                <label>Continuos Improvement</label>
                <p>
                    As a developer, is essential that we keep learning and
                    improving our skills, this way we can expand our ability to
                    solve problems and guarantee that we will always bring the
                    best solution to our customers
                </p>
            </Item>
        </Content>
    </Container>
);

export default Beliefs;
