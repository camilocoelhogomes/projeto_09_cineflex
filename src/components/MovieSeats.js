import { useParams } from "react-router-dom";
import axios from 'axios';

import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";


const MovieSeats = () => {
    const { idSection } = useParams();
    const [seats, setSeats] = useState({});

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSection}/seats`)
            .then(awnser => setSeats(awnser.data))

    }, [])

    console.log(seats)

    if (Object.keys(seats).length === 0) {
        return <Header header={'Selecione o(s) assento(s)'} />
    }

    return (
        <>
            <Header header={'Selecione o(s) assento(s)'} />
            <Footer posterURL={seats.movie.posterURL} title={seats.movie.title} day={seats.day.weekday} time={seats.name} />
        </>
    )
}

export default MovieSeats;