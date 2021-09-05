import styled from 'styled-components';
import { ArrowBackOutline } from 'react-ionicons';
import { useHistory, useLocation } from 'react-router-dom';

const TopBar = () => {
    let history = useHistory();
    return (
        <>

            <Header>
                {
                    useLocation().pathname === '/' ? <></> :
                        <button onClick={() => history.goBack()}>
                            <ArrowBackOutline
                                color={'#E8833A'}
                                height="34px"
                                width="34px"
                            />
                        </button>

                }
                CINEFLEX
            </Header>

        </>
    )
}

const Header = styled.header`
width: 100%;
background-color: #C3CFD9;
color: #E8833A;
display: flex;
justify-content: center;
align-items: center;
height: 67px;
font-size: 34px;
position: relative;

button{
    border: 0;
    background-color: inherit;
    position: absolute;
    left: 0;
}
`;


export default TopBar;