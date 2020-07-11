import styled from 'styled-components';

export const Container = styled.section`
    background: ${({ theme }) => theme.colors.black.main};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 80px;
    min-height: 100vh;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAB2CAYAAACH6LCMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgB7dixbcMwEAVQKhMkG2T/xsgEWiGbOBtcJMQB2FgiRQKEifcAqTDPn1BzxU9pExGf27Nuzz3+3PbfUqMhuY/D/4PcveXyYbmPr3tmTReNyl3298H/f5Zl+UgXjMp9218HA+/puiG5+wd9Hwx8pevG5MZsSyEbumUHa/Rbry+TCwAAnAqtT/GlWp/WXK1PBa1Pl9yYbSlkQ1ofAADgTGh9ii/V+rTman0qaH265MZsSyEb0voAAABnQutTfKnWpzVX61NB69MlN2ZbCtmQ1gcAADgTWp/iS7U+rblanwpany65MdtSyIa0PgAAwJnQ+hRfqvVpzdX6VND6dMmN2ZZCNjRF6/MLC3T6kPHXGQIAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAB2BAMAAAB1xq2/AAAAGFBMVEUAAAD/eAD/ewD/egD/egD/egD/eAD/egAuaSomAAAAB3RSTlMAIO/vv6+wWqxEiQAAAF1JREFUSMftkrsNgDAUA182iFiCGokJaBghg/C59ZF4pSVaoshXnTsXF2W7aryITrDkFG1w5hQFjpyiM5BTdIc7p+jHjdLWmlPU/ISLMuGiXFTPuCjjolxUzwxa1AMBAL39ffJ38wAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-position: 0 40%, 100% 100%;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    row-gap: 32px;
    width: 70%;
    height: auto;
    
    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(2, 50%);
    }

    div {

        h1 {
            font-size: 6em;
            letter-spacing: 0.05em;
            text-align: center;
            font-weight: lighter;
            color: ${({ theme }) => theme.colors.white.main};
            padding-bottom: 16px;
        }

        h2 {
            color: ${({ theme }) => theme.colors.white.medium};
            font-weight: lighter;
            text-align: center;
            letter-spacing: 0.05em;
            font-size: 1.5em;
        }

        h1, h2 {
            @media screen and (min-width: 992px) {
                text-align: left;
            }
        }
    }
`;

export const MainText = styled.span`
    color: ${({ theme }) => theme.colors.accent.main};
    font-weight: bold;
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    img {
        width: 100%;
        max-width: 300px;
        height: auto;
    }
`;