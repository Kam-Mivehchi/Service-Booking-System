import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const Overlay = styled(Card.ImgOverlay)`
    background-color:	rgb(0,0,0,.40);
    color:white;
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap:5px;
`;

export const Title = styled(Card.ImgOverlay)`
    font-weight:bold;
    font-size:2.75rem;
    color:theme.accent;
`;

export const FlexContainer = styled(Container)`
display:flex;
flex-direction: column;
justify-items:center;
align-items:center;
text-align:center;
width:50%;
`;
export const ResponsiveCard = styled(Card)`
  width:80%;
  margin:0 auto;
  transform: translate(0,-14rem); 
  border: 3px solid theme.white; 
  border-radius: 12px; 
  background-color: theme.white;
  @media (min-width: 768px) {
  width:70%;
  }
  @media (min-width: 992px) {
  width:70%;
  }
  @media (min-width: 992px) {
  width:40%;
  }
`;

export const StyledTitle = styled(Card.Title)`
font-weight:bold;
margin: 1rem auto 1rem auto ;
font-size:1.5rem;
`

export const StyledButton = styled(Button)`
    font-weight:bold;
    padding:4px 30px;
    border-radius:30px;

    color:black;

`
export const StyledCard = styled(Card)`
min-width:70vw;

position:absolute;
top:70vh;
left:50%;
transform:translate(-50%,-2rem);


`



