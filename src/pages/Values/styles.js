import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.black.main};
    color: ${({ theme }) => theme.colors.white.main};
    padding: 64px 0;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 32px;

    h1 {
        font-weight: bold;
        letter-spacing: 0.02em;
        padding-bottom: 8px;
    }

    h2 {
        font-weight: lighter;
        color: ${({ theme }) => theme.colors.white.medium};
    }
`;

export const Content = styled.div`
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-row-gap: 64px;
    grid-column-gap: 128px;

    @media screen and (min-width: 992px) {
        max-width: 70%;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`;

export const Item = styled.div`
    display: flex;
    text-align: left;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 32px;

    label {
        text-transform: uppercase;
        letter-spacing: 0.02em;
        font-weight: bold;
        padding: 32px 0 16px;
        color: ${({ theme }) => theme.colors.accent.main};
    }

    p {
        letter-spacing: 0.1em;
        font-size: 0.8em;
        line-height: 24px;
    }
`;
