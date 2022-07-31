import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components'
const content = {
    title: "Why Hire Us?",
    services: [
        { service: "Sustainability", icon: "X", desc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum " },
        { service: "Reliabilty", icon: "X", desc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum " },
        { service: "Protection", icon: "X", desc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum " },

    ]
}


const FlexContainer = styled(Container)`
display:flex;
flex-direction: column;
justify-items:center;
align-items:center;
text-align:center;
`
const Top3 = () => {
    return (

        <Container className="mt-2">
            {/* //each represents either service oicon or desc; */}
            <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 'bold', margin: '2rem' }}>{content.title}</h1>

            <Row className="d-flex flex-wrap justify-content-center">

                {content.services.map((item) => {
                    return (
                        <Col xs={12} md={6} lg={4} style={{ marginBottom: "1.25rem" }}>
                            <FlexContainer  >

                                <h2 xs={12} md={6} lg={4}>{item.service}</h2>
                                <h3 xs={12} md={6} lg={4}>{item.icon}</h3>
                                <p xs={12} md={6} lg={4}>{item.desc}</p>
                            </FlexContainer>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    )
}

export default Top3