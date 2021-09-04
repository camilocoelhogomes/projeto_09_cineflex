import styled from 'styled-components';

const Header = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 110px;
font-size: 24px;
color: ${({ type }) => type === 'confirm' ? '#247A6B' : '#293845'};
font-weight: ${({ type }) => type === 'confirm' ? 'bold' : 'normal'};
`;

const Button = styled.button`
background: #E8833A;
border-radius: 3px;
width: ${({ width }) => width};
height: 43px;
border: none;
margin: 22px 9px 22px 0;
font-size: 18px;
color: #ffffff
`;

export { Header, Button }