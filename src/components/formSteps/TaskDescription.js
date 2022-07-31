import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
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
    title: "Describe the Items",
    subtitle: "Describe what you want picked up and provide the approximate weight",
    disclaimer: "Use this area to give pickup instructions and window Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    recurring: {
        title: "Setup Recurring pickups",
        desc: "benefit details Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        freq: [["One Time", 1], ['Weekly', 7], ["Monthly", 30]]
    }
}
const TaskDescription = () => {
    return (
        <Card style={{ padding: '1rem' }}>
            <StyledHeader>{content.title}</StyledHeader>
            <Form>
                <Card.Title as="h6" style={{ marginTop: '1rem', textAlign: 'start', fontWeight: 'bold' }}>
                    {content.subtitle}
                </Card.Title>
                <Card.Text className="text-start">
                    {content.disclaimer}
                </Card.Text>
                <Form.Group className="mb-3" controlId="exampleForm.weight">
                    <Form.Label>List out your items:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>List out your items:</Form.Label>
                    <Form.Control type="number" rows={3} placeholder="weight in lbs" />
                </Form.Group>
                <Container className="mt-4 d-flex flex-column justify-content-center align-items-center">
                    <Card.Text as='p'>
                        Sub Total:
                    </Card.Text>
                    {/* increment this based on weigght and user selection*/}
                    <Card.Text as='h1'>
                        $1000
                    </Card.Text>
                </Container>
                <ButtonGroup style={{ width: '80%', position: 'relative', left: "50%", transform: 'translateX(-50%)', marginTop: '1rem' }}>
                    <StyledButton variant="outline-success" type="submit">Back</StyledButton>
                    <StyledButton variant="success">Next</StyledButton>
                </ButtonGroup>

            </Form>
        </Card>
    )
}

export default TaskDescription