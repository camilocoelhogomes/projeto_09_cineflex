import { useParams } from "react-router-dom";
import axios from 'axios';

import { useState, useEffect } from "react";


const MovieSeats = () => {
    const { idSection } = useParams();
    const [seats, setSeats] = useState({});

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSection}/seats`)
            .then(awnser => setSeats(awnser.data))

    }, [])

    console.log(seats)
    return (
        <>
            <p></p>
        </>
    )
}

export default MovieSeats;