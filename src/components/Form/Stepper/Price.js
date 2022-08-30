import React from 'react'
import Col from 'react-bootstrap/Col';

const Price = ({ price }) => {
    return (
        <>


            <Col xs={12} className={"d-flex flex-column align-items-center "}>

                <p>
                    Service Starts at
                </p>
                <p className="h2 mt-0" >
                    ${price}
                </p>


            </Col>



        </>
    )
}

export default Price