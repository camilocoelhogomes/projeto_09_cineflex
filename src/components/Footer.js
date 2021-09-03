import styled from 'styled-components'

const Poster = styled.div`
    padding: 8px;
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    align-items: center;
    box-sizing: border-box;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const MovieFooter = styled.div`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    padding: 14px 10px;
    display: flex;
    align-items: center;
`;

const MovieTitle = styled.p`
font-size: 26px;
line-height: 30px;
color: #293845;
margin: 0 0 0 14px;
`;



const Footer = ({ posterURL, title, time }) => {
    return (
        <MovieFooter>
            <Poster>
                <Img src={posterURL} alt={title} />
            </Poster>
            <div>
                <MovieTitle>{title}</MovieTitle>
                <MovieTitle>{time}</MovieTitle>
            </div>
        </MovieFooter>
    )
}

export default Footer;