import { Link } from 'react-router-dom';
import styled from 'styled-components'

const MovieCard = ({ posterURL, id, title }) => {
    return (
        <Link to={`movie/${id}`}>
            <Poster>
                <img src={posterURL} alt={title} />
            </Poster>
        </Link>
    )
}

export default MovieCard;

const Poster = styled.div`
    padding: 8px;
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 0 0 11px 0;
    img{
        width: 100%;
    height: 100%;
    }
`;
