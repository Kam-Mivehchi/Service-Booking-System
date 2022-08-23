import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const Price = (props) => {
    return (
        <>

            <Container className="text-center">
                <Col xs={12} className={""}>

                    <p>
                        Service Starts at
                    </p>
                    <p className="h2 mt-0" >
                        ${props.price}
                    </p>


                </Col>
            </Container>


        </>
    )
}

export default Price