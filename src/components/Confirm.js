import { Header, Button } from "./Shared"
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const Confirm = ({ selectedSeats, confirm }) => {
    console.log(selectedSeats);
    return (
        <ConfirmScreen>
            <Header type='confirm'>Pedido feito com sucesso!</Header>
            <h2>Filme e sessão</h2>
            <p>{selectedSeats.movie.title}</p>
            <p>{selectedSeats.day.weekday} - {selectedSeats.time}</p>
            <h2>Ingressos</h2>
            {selectedSeats.tickets.map(ticket => <p>Assento {ticket}</p>)}
            <h2>Comprador (es)</h2>
            {
                selectedSeats.compradores.map(comprador =>
                    <>
                        <p>Nome: {comprador.nome}</p>
                        <p>CPF: {comprador.cpf}</p>
                        <br />
                    </>)
            }

            <Button width='225px' onClick={confirm}>Voltar para a Home</Button>
        </ConfirmScreen>
    )
}

const ConfirmScreen = styled.div`
    font-family: 'Roboto',sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 24px;
    
    h2{
        width: 100%;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        margin: 16px 24px 8px 24px;
        color: #293845;
    }
    
    p{
        width: 100%;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        margin: 0 24px;
        color: #293845;

    }
`;

export default Confirm