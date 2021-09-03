import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Seat from './Seat';
import { Button } from './SectionDay';

const Seats = styled.div`
display: grid;
grid-template-columns: repeat(10, 1fr);
gap: 18px 0px;
grid-auto-rows: minmax(26px, auto);
width: calc(100% - 48px);
margin: 0 auto;
`;

const SeatsLabel = styled.div`
    width: 100%;
    margin: 16px 0 0 0;
    display: flex;
    justify-content: space-around;
`;


const LabelText = styled.div`
font-size: 13px;
color: #4E5A65;
width: 72px;
text-align: center;
`;

const Available = styled.div`
width: 26px;
height: 26px;
border-radius: 100%;
margin: 0 auto;
border: 1px solid #808F9D;background: #C3CFD9;
`;

const Selected = styled.div`
width: 26px;
height: 26px;
border-radius: 100%;
margin: 0 auto;
background: #8DD7CF;border: 1px solid #45BDB0;`;

const Unavailable = styled.div`
width: 26px;
height: 26px;
border-radius: 100%;
margin: 0 auto;
border: 1px solid #F7C52B;;background: #FBE192;`;

const ReserveSeats = styled.div`
    box-sizing: border-box;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 80px 0;
`;

const InputArea = styled.div`width: 100%`

const BuyerInput = styled.p`
font-size: 18px;
line-height: 21px;
color: #293845;
margin: 7px 0;
`

const Input = styled.input`
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 3px;
width: 100%;
height: 50px;
font-family: Roboto;
font-weight: normal;
font-size: 18px;
line-height: 21px;
padding: 8px;
`

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
            <SeatsLabel>
                <div>
                    <Available></Available>
                    <LabelText>Disponivel</LabelText>
                </div>
                <div>
                    <Selected></Selected>
                    <LabelText>Selecionado</LabelText>
                </div>
                <div>
                    <Unavailable></Unavailable>
                    <LabelText>Indisponível</LabelText>
                </div>
            </SeatsLabel>

            <ReserveSeats>
                <InputArea>
                    <BuyerInput>Nome do Comprador</BuyerInput>
                    <Input placeholder={'Digite seu Nome...'} />
                </InputArea>
                <InputArea>
                    <BuyerInput>CPF do Comprador</BuyerInput>
                    <Input placeholder={'Digite seu CPF...'} />
                </InputArea>
                <Button>Reserve Assentos</Button>
            </ReserveSeats>


            <Footer posterURL={seats.movie.posterURL} title={seats.movie.title} day={seats.day.weekday} time={seats.name} />
        </>
    )
}

export default MovieSeats;