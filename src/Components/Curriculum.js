import { Container, Row, Col } from "react-bootstrap";
import cur from "../assets/img/CurrículoLucasOmena.pdf";
import { RiMailDownloadLine } from "react-icons/ri";

export const Curriculum = () => {
  
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={18} md={6} xl={5}>
              <h3>Se interessou? <br/> Segue meu curriculo! </h3>
              
            </Col>
            <Col md={10} xl={3}>
                <div className="new-email-bx ">
                  <a href={cur} target="_blank" rel="noreferrer"> <RiMailDownloadLine />curriculo.pdf</a>
                </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}