import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const footer = () => {
    return (
        <>
            <Container fluid >
                <Row className="text-center">
                    <Col>
                        <h4>Connect</h4>
                        <p>item1</p>
                        <p>item2</p>
                        <p>item3</p>
                    </Col>
                    <Col>
                        <h4 className="">Sustainability</h4>
                        <p>item1</p>
                        <p>item2</p>
                        <p>item3</p>
                    </Col>
                    <Col>
                        <h4 className="">Contact</h4>
                        <p>item1</p>
                        <p>item2</p>
                        <p>item3</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default footer