import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
    color: #293845;
    font-size: 20px;
    line-height: 23px;
`;

const Button = styled.button`
background: #E8833A;
border-radius: 3px;
min-width: 83px;
max-width: 225px;
height: 43px;
border: none;
margin: 22px 9px 22px 0;
font-size: 18px;
color: #ffffff

`;

const SectionDay = ({ id, weekday, date, showtimes }) => {
    const match = useRouteMatch();
    return (
        <>
            <Header>
                {weekday} - {date}
            </Header>
            {
                showtimes.map((showtime, key) =>
                    <Link key={key} to={`${match.url}/section/${showtime.id}`}>
                        <Button key={key}>
                            {showtime.name}
                        </Button>
                    </Link>
                )
            }

        </>
    )
}

export { Button }

export default SectionDay;