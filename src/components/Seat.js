import styled from 'styled-components';

const Seat = ({ selectedSeats, id, name, isAvailable, selectSeat }) => {

    const Button = styled.button`
        width: 24px;
        height: 24px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000000;
        font-size: 11px;
        ${!isAvailable ?
            'border: 1px solid #F7C52B;;background: #FBE192;' :
            selectedSeats.id.includes(id) ?
                'background: #8DD7CF;border: 1px solid #45BDB0;' :
                'border: 1px solid #808F9D;background: #C3CFD9;'
        }
    `;

    return (
        <Button disabled={!isAvailable} onClick={() => selectSeat(id)}>
            {name < 10 ? `0${name}` : name}
        </Button>
    );
}

export default Seat;