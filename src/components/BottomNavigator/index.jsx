import React from 'react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faHandshake, faBrain, faRocket } from '@fortawesome/free-solid-svg-icons';

import { Container, List, Item } from './styles';

const BottomNavigator = ({ setActiveSection }) => (
    <Container>
        <List>
            <Item 
                onClick={() => setActiveSection('home')}
            >
                <Icon icon={faHome} />
                <small>
                    Home
                </small>
            </Item>
            <Item 
                onClick={() => setActiveSection('about')}
            >
                <Icon icon={faInfo} />
                <small>
                    About
                </small>
            </Item>
            <Item 
                onClick={() => setActiveSection('values')}
            >
                <Icon icon={faHandshake} />
                <small>
                    Values
                </small>
            </Item>
            <Item 
                onClick={() => setActiveSection('skills')}
            >
                <Icon icon={faBrain} />
                <small>
                    Skills
                </small>
            </Item>
            <Item 
                onClick={() => setActiveSection('projects')}
            >
                <Icon icon={faRocket} />
                <small>
                    Projects
                </small>
            </Item>
        </List>
    </Container>
);

export default BottomNavigator;
