import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import nave from "../assets/img/images.png"


export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} classname="nave">
            <img src={nave} alt="nave"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/lucasomena/"><img src={navIcon1} alt="" /></a>
              <a href="https://web.facebook.com/lucas.omena.37/"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/lucaomena/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. <br/> Acesse ao meu Portfolio no GitHub para encontrar este codigo. <br/>Star Wars e seus personagens são propriedade da Lucasfilm e Disney.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}