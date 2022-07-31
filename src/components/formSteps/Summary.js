import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
const StyledHeader = styled(Card.Title)`
    font-weight:bold;
    margin: 1rem auto 2rem auto ;
    font-size:1.5rem;
`
const StyledButton = styled(Button)`
    font-weight:bold;
    padding:4px 30px;
    border-radius:30px;

`
const content = {
    title: "Order Summary",
    total: "Total:",
    service: {
        title: "Review Order"
    },
    pickup: {
        title: "Pickup Details",
        day: "Day of Week, Month Day  ",
        time: "1:30 pm",
        address: '##### Street Name, City, State, Country',
    },
    order: [
        {
            service: "Base Service Cost",
            cost: 100
        },
        {
            service: "Cardboard",
            cost: 20
        },
        {
            service: "Cardboard",
            cost: 20
        },
        {
            service: "Cardboard",
            cost: 20
        },

    ],
    price: 120,
    recurring: {
        title: "Setup Recurring pickups",
        desc: "benefit details Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        freq: [["One Time", 1], ['Weekly', 7], ["Monthly", 30]]
    }
}
const Summary = () => {
    return (
        <Card style={{ padding: '1rem' }}>
            <StyledHeader>{content.title}</StyledHeader>
            <Card>
                <Card.Body as="h5" style={{ fontWeight: 'bold' }}>{content.service.title}</Card.Body>
                <Card.Body>

                    {content.order.map(item => {
                        return (
                            <>
                                <Container className="d-flex justify-content-between">
                                    <Card.Text>{item.service}</Card.Text>
                                    <Card.Text>${item.cost}</Card.Text>
                                </Container>
                            </>
                        )
                    })}

                </Card.Body>
                <Card.Body>
                    <Card.Text as="p" style={{ fontWeight: 'bold' }}>{content.pickup.title}</Card.Text>
                    <Container>
                        <Card.Text > {content.pickup.address}</Card.Text>
                        <Card.Text style={{ fontWeight: '500' }}> {content.pickup.day}</Card.Text>
                        <Card.Text style={{ fontWeight: '500' }}> {content.pickup.time}</Card.Text>
                    </Container>
                </Card.Body>
                <Card.Footer as="h3" style={{ fontWeight: 'bold' }}>

                    <Container className="d-flex justify-content-between">
                        <Card.Text>{content.total}</Card.Text>
                        <Card.Text >${content.price}</Card.Text>
                    </Container>
                </Card.Footer>
            </Card>
            <ButtonGroup style={{ width: '80%', position: 'relative', left: "50%", transform: 'translateX(-50%)', marginTop: '1rem' }}>
                <StyledButton variant="outline-success" type="submit">Back</StyledButton>
                <StyledButton variant="success">Next</StyledButton>
            </ButtonGroup>
        </Card >
    )
}

export default Summary