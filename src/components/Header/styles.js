import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 64px 0;
    background: ${({ theme }) => theme.colors.black.main};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.black.main};
    width: 70%;
    height: 100%;
`;

export const LogoContainer = styled.div`
    width: 100%;
    max-width: 100px;
    height: auto;
`;

export const Logo = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;

    label {
        font-size: 0.9em;
        color: ${({ theme }) => theme.colors.white.main};
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    span {
        font-size: 0.08em;
        color: ${({ theme }) => theme.colors.white.medium};
        font-weight: lighter;
        letter-spacing: 0.08em;
        text-transform: lowercase;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`;

export const Item = styled.li`
    text-align: center;

    &:not(:last-of-type) {
        /* display: none; */
        padding: 0 32px;
    }

    &:last-of-type {
        padding-left: 32px;
    }

    @media screen and (min-width: 992px) {
        display: block;
    } 
`;

export const StyledLink = styled.a`
    color: ${({ active, theme }) => active 
        ? theme.colors.white.main
        : theme.colors.white.medium
    };

    padding-bottom: 8px;

    border-bottom: ${({ active, theme }) => active && css`
        2px solid ${theme.colors.accent.main}
    `};
`;

export const Button = styled.button`
    width: auto;
    height: 50px;
    padding: 16px;
    border-radius: 5px;
    text-align: center;
    background: transparent;
    font-size: 1em;
    font-weight: 500;
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent.main};
    border: 2px solid ${({ theme }) => theme.colors.accent.main};
    letter-spacing: 0.1em;
    transition: 0.3s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.accent.main};
        color: ${({ theme }) => theme.colors.white.main};
        padding: 16px 32px;
    }
`;
