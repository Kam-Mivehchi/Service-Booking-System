
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTheme } from '../../Utils/ThemeContext'
import { FaHandHoldingMedical } from 'react-icons/fa'
import { AiOutlineStock } from 'react-icons/ai'
import { GiChemicalDrop } from 'react-icons/gi'
import { FlexContainer } from '../../Utils/StyledComponents'

const content = {
    title: "Why Hire Us?",
    services: [
        { service: "Convenience", icon: <FaHandHoldingMedical />, desc: "Give your customers what they want, cut down phone calls and automate your ordering system" },
        {
            service: "Growth", icon: <AiOutlineStock />, desc: "Designed to promote business growth, and can scale with the size of your company. Solutions available for all businesses, big or small"
        },
        { service: "Customized Solutions", icon: <GiChemicalDrop />, desc: "No two customers are alike, we work with each of our clients to build custom websites or integrate our technology into any existing site" },

    ]
}



const Top3 = () => {
    const theme = useTheme()
    return (

        <Container className="m-0 p-0" style={{
            backgroundColor: theme.primary, minWidth: '100vw', overflow: 'hidden', transform: 'translateY(-3rem)',
        }}>
            {/* //each represents either service oicon or desc; */}
            < h1 style={{
                textAlign: "center", fontSize: "4rem", fontWeight: 'bold', margin: '2rem'
            }}> {content.title}</h1 >

            < Row className="d-flex flex-wrap flex-column flex-md-row justify-content-md-center p-0 m-0" >

                {
                    content.services.map((item) => {
                        return (
                            <Col xs={12} md={6} style={{ marginBottom: "1.25rem" }}>
                                <FlexContainer >
                                    <h3 xs={12} md={6} lg={4} style={{
                                        fontSize: '600%', color: `${(item.service === "Growth" && theme.green) || (item.service === "Customized Solutions" && theme.secondary) || (item.service === "Convenience" && theme.blue)
                                            }`
                                    }}>{item.icon}</h3>
                                    <h2 xs={12} md={6} lg={4} style={{ fontWeight: '600', }}>{item.service}</h2>
                                    <p xs={12} md={6} lg={4}>{item.desc}</p>
                                </FlexContainer>
                            </Col>
                        )
                    })
                }
            </Row>

        </Container >
    )
}

export default Top3