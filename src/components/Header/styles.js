import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
    z-index: 2;
    background: ${({ theme }) => theme.colors.black.main};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 32px;

    @media screen and (min-width: 992px) {
        padding: 0;
    }

`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.black.main};
    height: 100%;
    width: 100%;

    @media screen and (min-width: 992px) {
        width: 70%;

        nav {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
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
    text-align: left;

    label {
        font-size: 0.9em;
        color: ${({ theme }) => theme.colors.white.main};
        letter-spacing: 0.10em;
        text-transform: uppercase;
    }

    span {
        font-size: 0.9em;
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
    color: ${({ active, theme }) => active 
        ? theme.colors.white.main
        : theme.colors.white.medium
    };

    padding: 0 16px 16px;

    border-bottom: ${({ active, theme }) => active && css`
        2px solid ${theme.colors.accent.main}
    `};

    display: none;

    @media screen and (min-width: 992px) {
        display: block;

        &:hover {
            cursor: pointer;
        }
    }
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
    margin-left: 32px;

    &:hover {
        background: ${({ theme }) => theme.colors.accent.main};
        color: ${({ theme }) => theme.colors.white.main};
        padding: 16px 32px;
    }
`;
