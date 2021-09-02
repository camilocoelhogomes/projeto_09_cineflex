import styled from 'styled-components'

const Header = styled.header`
width: 100%;
background-color: #C3CFD9;
color: #E8833A;
display: flex;
justify-content: center;
align-items: center;
height: 67px;
font-size: 34px;
`;

const TopBar = () => {
    return (
        <Header>
            CINEFLEX
        </Header>
    )
}

export default TopBar;