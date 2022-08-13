import { Container, Row, Col } from "react-bootstrap";
import R2D2 from "../assets/img/R2D2.png"

export const Message = () => {

    return (
        <section className="message" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={ R2D2 } alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                    <h2>Frase</h2>
                    <p>“Somos o que repetidamente fazemos. Portanto, a excelência não é um feito, é um hábito”. (Arístoteles)</p>    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}