
import Card from 'react-bootstrap/Card';
import { StyledButton, StyledCard } from '../../Utils/StyledComponents'

const content = {
    cardText: 'Sustainable Junk Removal Built Around Your Schedule!',
    cta: "Book Now!"
}

const SecondCTA = () => {
    return (
        <StyledCard className="text-center" bg="dark">
            <Card.Body>
                <Card.Title as='h2' style={{ marginBottom: '1.5rem', color: '#979797' }}>{content.cardText}</Card.Title>

                <StyledButton variant="success">{content.cta}</StyledButton>
            </Card.Body>

        </StyledCard >
    )
}

export default SecondCTA