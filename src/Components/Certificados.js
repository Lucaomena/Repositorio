import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Certificado } from "./Certificado";
import Js1 from "../assets/img/certificados/Js1.png";
import Js2 from "../assets/img/certificados/Js2.png";
import Js3 from "../assets/img/certificados/Js3.png";
import Js4 from "../assets/img/certificados/Js4.png";
import Js5 from "../assets/img/certificados/Js5.png";
import Js6 from "../assets/img/certificados/Js6.png";
import Js7 from "../assets/img/certificados/Js7.png";
import Js8 from "../assets/img/certificados/Js8.png";
import Js9 from "../assets/img/certificados/Js9.png";
import Js10 from "../assets/img/certificados/Js10.png";
import Js11 from "../assets/img/certificados/Js11.png";
import Css1 from "../assets/img/certificados/Css1.png";
import Css2 from "../assets/img/certificados/Css2.png";
import Css3 from "../assets/img/certificados/Css3.png";
import Git1 from "../assets/img/certificados/Git1.png";
import Git2 from "../assets/img/certificados/Git2.png";
import Pensa from "../assets/img/certificados/P1.png";
import An2 from "../assets/img/certificados/An2.png";
import An3 from "../assets/img/certificados/An3.png";
import An4 from "../assets/img/certificados/An4.png";
import An5 from "../assets/img/certificados/An5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificados = () => {

    const certificados1 = [
        {
            title: "Manipulando a D.O.M. com JavaScript",
            description: "Certificado JS-D.O.M",
            imgUrl: Js1,
        },
        {
            title: "Sintaxe e Operadores",
            description: "Certificado JS-Operadores",
            imgUrl: Js2,
        },
        {
            title: "Sintaxe Básica em JavaScript",
            description: "Certificado JS-Sintaxe",
            imgUrl: Js3,
        },
        {
            title: "Funções",
            description: "Certificado JS-Funções",
            imgUrl: Js4,
        },
        {
            title: "Coleções",
            description: "Certificado JS-Coleções",
            imgUrl: Js5,
        },
        {
            title: "Map, Filter e Reduce",
            description: "Certificado JS-Map, Filter e Reduce",
            imgUrl: Js6,
        },
        {
            title: "Debbugging e Error Handing",
            description: "Certificado JS-Debbugging e Error Handing",
            imgUrl: Js7,
        },
        {
            title: "Assíncrono",
            description: "Certificado JS-Assíncrono",
            imgUrl: Js8,
        },
        {
            title: "Orientação a Objetos",
            description: "Certificado JS-Orientação a Objetos",
            imgUrl: Js9,
        },
        {
            title: "Módulos",
            description: "Certificado JS-Módulos",
            imgUrl: Js10,
        },
        {
            title: "Manipulando a D.O.M. com JavaScript",
            description: "Certificado JS-D.O.M",
            imgUrl: Js11,
        },
    ];
    const certificados2 = [
        {
            title: "Introdução de websites com HTML5 e CSS3",
            description: "Certificado CSS-Introdução",
            imgUrl: Css1,
        },
        {
            title: "Flexbox em Css",
            description: "Certificado CSS-Flexbox",
            imgUrl: Css2,
        },
        {
            title: "Recriando a página inicial do Instagram",
            description: "Certificado CSS-Recriando PG",
            imgUrl: Css3,
        },
        {
            title: "Introdução ao Pensamento Computacional",
            description: "Certificado Pensamento Computacional",
            imgUrl: Pensa,
        },
        {
            title: "Introdução ao Git e GitHub",
            description: "Certificado GIT-Introdução",
            imgUrl: Git1,
        },
        {
            title: "Criando o primeiro repositório",
            description: "Certificado GIT-Criando Repositório",
            imgUrl: Git2,
        },
    ]
    const certificados3 = [
        {
            title: "Trabalhando com Páginas SPA com Angular",
            description: "Certificado Angular-SPA",
            imgUrl: An2,
        },
        {
            title: "Arquitetura de componentes",
            description: "Certificado Angular-Complexidade no Front",
            imgUrl: An3,
        },
        {
            title: "Instalando e preparando o ambiente Angular",
            description: "Certificado Angular-Intalação",
            imgUrl: An4,
        },
        {
            title: "Explorando diretivas com Angular",
            description: "Certificado Angular-Diretivas",
            imgUrl: An5,
        },
    ]
    const certificados4 = [
        {
            title: "Trabalhando com Páginas SPA com Angular",
            description: "Certificado Angular-SPA",
            imgUrl: An2,
        },
        {
            title: "Arquitetura de componentes",
            description: "Certificado Angular-Complexidade no Front",
            imgUrl: An3,
        },
        {
            title: "Instalando e preparando o ambiente Angular",
            description: "Certificado Angular-Intalação",
            imgUrl: An4,
        },
        {
            title: "Explorando diretivas com Angular",
            description: "Certificado Angular-Diretivas",
            imgUrl: An5,
        },
    ]
    const certificados5 = [
        {
            title: "Trabalhando com Páginas SPA com Angular",
            description: "Certificado Angular-SPA",
            imgUrl: An2,
        },
        {
            title: "Arquitetura de componentes",
            description: "Certificado Angular-Complexidade no Front",
            imgUrl: An3,
        },
        {
            title: "Instalando e preparando o ambiente Angular",
            description: "Certificado Angular-Intalação",
            imgUrl: An4,
        },
        {
            title: "Explorando diretivas com Angular",
            description: "Certificado Angular-Diretivas",
            imgUrl: An5,
        },
    ]
    const certificados6 = [
        {
            title: "Trabalhando com Páginas SPA com Angular",
            description: "Certificado Angular-SPA",
            imgUrl: An2,
        },
        {
            title: "Arquitetura de componentes",
            description: "Certificado Angular-Complexidade no Front",
            imgUrl: An3,
        },
        {
            title: "Instalando e preparando o ambiente Angular",
            description: "Certificado Angular-Intalação",
            imgUrl: An4,
        },
        {
            title: "Explorando diretivas com Angular",
            description: "Certificado Angular-Diretivas",
            imgUrl: An5,
        },
    ]

    return (
        <section className="project" id="certificados">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Certificados</h2>
                                    <p>Segue alguns certificados</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-1 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">JavaScript</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Css3</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Angular</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth">Linux</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fifth">Git</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="sixth">Docker</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        certificados1.map((project, index) => {
                                                            return (
                                                                <Certificado
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        certificados2.map((project, index) => {
                                                            return (
                                                                <Certificado
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        certificados3.map((project, index) => {
                                                            return (
                                                                <Certificado
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <Row>
                                                    {
                                                        certificados4.map((project, index) => {
                                                            return (
                                                                <Certificado
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fifth">
                                                <Row>
                                                    {
                                                        certificados5.map((project, index) => {
                                                            return (
                                                                <Certificado
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sixth">
                                                <Row>
                                                    {
                                                        certificados6.map((project, index) => {
                                                            return (
                                                                <Certificado
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>


                                </div>}

                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>


        </section>
    )
}