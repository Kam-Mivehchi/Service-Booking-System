import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Price = (props) => {
    return (
        <>
            <Row className="justify-content-between mx-auto gap-1 ">
                <Col xs={5}>
                    <Row>

                        Service Starts at
                    </Row>
                    {/* based on the users distance we need to change the price */}
                    <Row as='h1'>
                        ${props.price}
                    </Row>
                </Col>

            </Row>
        </>
    )
}

export default Price