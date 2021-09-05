import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Header, Button } from "./Shared";
import Seat from './Seat';


const MovieSeats = ({ selectedSeats, selectSeat, inputPerson, reserveSeats }) => {

    const { idSection } = useParams();
    const [seats, setSeats] = useState({});

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSection}/seats`)
            .then(awnser => { setSeats(awnser.data) })

    }, [])




    if (Object.keys(seats).length === 0) {
        return <Header>Selecione o(s) assento(s)</Header>
    }

    return (
        <>
            <Header>Selecione o(s) assento(s)</Header>
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
                    <Label label='' />
                    <p>Disponivel</p>
                </div>
                <div>
                    <Label label='selected' />
                    <p>Selecionado</p>
                </div>
                <div>
                    <Label label='disabled' />
                    <p>Indisponível</p>
                </div>
            </SeatsLabel>

            <ReserveSeats>
                <InputArea>
                    <p>Nome do Comprador</p>
                    <input
                        placeholder={'Digite seu Nome...'}
                        onChange={(e) => inputPerson('name', e.target.value)}
                        value={selectedSeats.name}
                    />
                </InputArea>
                <InputArea>
                    <p>CPF do Comprador</p>
                    <input
                        value={selectedSeats.cpf}
                        placeholder={'Digite seu CPF...'}
                        onChange={(e) => inputPerson('cpf', e.target.value)}
                    />
                </InputArea>
                <Button
                    width='225px'
                    disabled={selectedSeats.name.length === 0 || selectedSeats.cpf.length === 0 || selectedSeats.ids.length === 0}
                    onClick={() => reserveSeats(selectedSeats, seats)}
                >
                    Reserve Assentos
                </Button>
            </ReserveSeats>



            <Footer
                posterURL={seats.movie.posterURL}
                title={seats.movie.title}
                day={seats.day.weekday}
                time={seats.name}
            />
        </>
    )
}

export default MovieSeats;

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
    p{
        font-size: 13px;
        color: #4E5A65;
        width: 72px;
        text-align: center;
    }
`;


const Label = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 100%;
    margin: 0 auto;

    background: ${({ label }) => label === 'disabled' ? '#FBE192' :
        label === 'selected' ? '#8DD7CF' : '#C3CFD9'};
            
    border: ${({ label }) => label === 'disabled' ? '1px solid #F7C52B' :
        label === 'selected' ? '1px solid #45BDB0' : '1px solid #808F9D'};
`;

const ReserveSeats = styled.div`
    box-sizing: border-box;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 80px 0;
`;

const InputArea = styled.div`
width: 100%;
    p{
        font-size: 18px;
        line-height: 21px;
        color: #293845;
        margin: 7px 0;
    }
    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border - box;
        border-radius:3px;
        width:100%;
        height:50px;
        font-family:'Roboto', sans-serif;
        font-weight:normal;
        font-size:18px;
        line-height:21px;
        padding:8px;

        ::placeholder{
            font-style: italic;
        }
    }
`;


