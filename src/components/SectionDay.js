import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Shared'


const SectionDay = ({ weekday, date, showtimes }) => {
    const match = useRouteMatch();
    return (
        <>
            <Header>
                {weekday} - {date}
            </Header>
            {
                showtimes.map((showtime, key) =>
                    <Link key={key} to={`${match.url}/section/${showtime.id}`}>
                        <Button width='83px' key={key}>
                            {showtime.name}
                        </Button>
                    </Link>
                )
            }

        </>
    )
}


export default SectionDay;

const Header = styled.div`
    color: #293845;
    font-size: 20px;
    line-height: 23px;
`;
