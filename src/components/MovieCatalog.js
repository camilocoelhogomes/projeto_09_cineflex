import styled from 'styled-components'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


const Header = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 110px;
font-size: 24px;
color: #293845;
`;

const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`;

const MovieCatalog = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies')
            .then(awnser => setMovies(awnser.data))
    }, [])

    console.log(movies)
    return (
        <>
            <Header>
                Selecione o Filme
            </Header>
            <Movies>
                {movies.map((movie, key) => <MovieCard
                    key={key}
                    posterURL={movie.posterURL}
                    id={movie.id}
                    title={movie.title}
                />)}

            </Movies>
        </>
    )
}

export default MovieCatalog;