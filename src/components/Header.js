import styled from 'styled-components';

const SubHeader = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 110px;
font-size: 24px;
color: #293845;
`;


const Header = ({ header }) => {
    return (
        <SubHeader>
            {header}
        </SubHeader>
    )
}

export default Header