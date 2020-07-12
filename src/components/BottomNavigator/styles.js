import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 2;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 80px;
    padding: 16px 32px;
    background: ${({ theme }) => theme.colors.black.main};

    @media screen and (min-width: 992px) {
        display: none;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 32px;
    width: 100%;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3 ease;
    color: ${({ theme, active }) => 
        active
            ? (theme.colors.accent.main)
            : (theme.colors.white.medium)
    };

    small {
        padding-top: 8px;
    }
`;
