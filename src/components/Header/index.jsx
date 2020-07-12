import React from 'react';

import {
    StyledHeader,
    Container,
    Logo,
    List,
    Item,
    Button,
} from './styles';

const Header = ({ setActiveSection }) => {
    return (
        <StyledHeader>
            <Container>
                <Logo>
                    <label>
                        Luiz Sandoval
                    </label>
                    <span>
                        Fullstack developer
                    </span>
                </Logo>

                <nav>
                    <List>
                        <Item 
                            onClick={() => setActiveSection('home')}
                        >
                            Home
                        </Item>
                        <Item 
                            onClick={() => setActiveSection('about')}
                        >
                            About
                        </Item>
                        <Item
                            onClick={() => setActiveSection('values')}
                            >
                            Values
                        </Item>
                        <Item
                            onClick={() => setActiveSection('skills')}
                        >
                            Skills
                        </Item>
                        <Item
                            onClick={() => setActiveSection('projects')}
                        >
                            Projects
                        </Item>
                    </List>
                    <Button 
                        type="button"
                        onClick={() => setActiveSection('contact')}
                    >
                        Contact me
                    </Button>
                </nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
