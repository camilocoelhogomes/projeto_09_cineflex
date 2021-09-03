import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Seat from './Seat';

const Seats = styled.div`
display: grid;
grid-template-columns: repeat(10, 1fr);
gap: 18px 0px;
grid-auto-rows: minmax(26px, auto);
width: calc(100% - 48px);
margin: 0 auto;
`;

const MovieSeats = ({ selectedSeats, selectSeat }) => {

    const { idSection } = useParams();
    const [seats, setSeats] = useState({});

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSection}/seats`)
            .then(awnser => setSeats(awnser.data))

    }, [])



    if (Object.keys(seats).length === 0) {
        return <Header header={'Selecione o(s) assento(s)'} />
    }
    console.log(seats.seats[0]);
    return (
        <>
            <Header header={'Selecione o(s) assento(s)'} />
            <Seats>
                {
                    seats.seats.map((seat, key) => <Seat
                        key={key}
                        selectedSeats={selectedSeats}
                        id={seat.id}
                        name={seat.name}
                        isAvailable={seat.isAvailable}
                        selectSeat={selectSeat}
                    />)
                }
            </Seats>
            <Footer posterURL={seats.movie.posterURL} title={seats.movie.title} day={seats.day.weekday} time={seats.name} />
        </>
    )
}

export default MovieSeats;