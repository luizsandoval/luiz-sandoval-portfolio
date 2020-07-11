import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 64px 0;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 32px;

    h1, h2 {
        text-align: center;
    }

    h1 {
        font-weight: bold;
        padding-bottom: 8px;
        letter-spacing: 0.05em;
    }

    h2 {
        color: ${({ theme }) => theme.colors.black.medium};
    }
`;

export const Summary = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    row-gap: 32px;
    padding: 32px 0;
    width: 70%;
`;

export const SummaryItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    label {
        font-weight: bold;
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.medium};
    margin-bottom: 16px;
`;

export const Profile = styled.div`
    padding: 32px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        text-align: center;
        width: 100%;
        font-weight: lighter;
        letter-spacing: 0.01em;
        line-height: 40px;
        padding-top: 32px;
    }
`;

export const Avatar = styled.div`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
`;
