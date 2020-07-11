import React from 'react';

import {
    StyledHeader,
    Container,
    Logo,
    List,
    Item,
    StyledLink,
    Button,
} from './styles';

const Header = () => {
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
                        <Item>
                            <StyledLink active href="#home">
                                Home
                            </StyledLink>
                        </Item>
                        <Item>
                            <StyledLink href="#about">
                                About
                            </StyledLink>
                        </Item>
                        <Item>
                            <StyledLink href="#values">
                                Values
                            </StyledLink>
                        </Item>
                        <Item>
                            <StyledLink href="#skills">
                                Skills
                            </StyledLink>
                        </Item>
                        <Item>
                            <StyledLink href="#projects">
                                Projects
                            </StyledLink>
                        </Item>
                        <Item>
                            <Button type='button' href="#contact">Contact me</Button>
                        </Item>
                    </List>
                </nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
