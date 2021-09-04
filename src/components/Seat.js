import styled from 'styled-components';

const Seat = ({ selectedSeats, id, name, isAvailable, selectSeat }) => {


    return (
        <Button id={id} selectedSeats={selectedSeats} isAvailable={isAvailable} onClick={() => selectSeat(id, isAvailable)}>
            {name < 10 ? `0${name}` : name}
        </Button>
    );
}

export default Seat;

const Button = styled.button`
        width: 24px;
        height: 24px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000000;
        font-size: 11px;
        background: ${({ isAvailable, selectedSeats, id }) => !isAvailable ? '#FBE192' :
        selectedSeats.id.includes(id) ? '#8DD7CF' : '#C3CFD9'};
        
        border: ${({ isAvailable, selectedSeats, id }) => !isAvailable ? '1px solid #F7C52B' :
        selectedSeats.id.includes(id) ? '1px solid #45BDB0' : '1px solid #808F9D'};
        
    `;