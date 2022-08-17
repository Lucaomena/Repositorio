import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
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
import SoLnx1 from "../assets/img/certificados/SoLnx1.png";
import SoLnx2 from "../assets/img/certificados/SoLnx2.png";
import SoLnx3 from "../assets/img/certificados/SoLnx3.png";
import SoLnx4 from "../assets/img/certificados/SoLnx4.png";
import SoLnx5 from "../assets/img/certificados/SoLnx5.png";
import SoLnx6 from "../assets/img/certificados/SoLnx6.png";
import SoLnx7 from "../assets/img/certificados/SoLnx7.png";
import SoLnx8 from "../assets/img/certificados/SoLnx8.png";
import SoLnx9 from "../assets/img/certificados/SoLnx9.png";
import SoLnx10 from "../assets/img/certificados/SoLnx10.png";
import SoLnx11 from "../assets/img/certificados/SoLnx11.png";
import SoLnx12 from "../assets/img/certificados/SoLnx12.png";
import SoLnx13 from "../assets/img/certificados/SoLnx13.png";
import SoLnx14 from "../assets/img/certificados/SoLnx14.png";
import Bd1 from "../assets/img/certificados/Bd1.png";
import Pbi3 from "../assets/img/certificados/Pbi3.png";
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
            title: "Introdução ao Sistema Operacioanl Linux",
            description: "Certificado Introdução Linux",
            imgUrl: SoLnx1,
        },
        {
            title: "Instalando o Linux",
            description: "Certificado Linux-Instalação",
            imgUrl: SoLnx2,
        },
        {
            title: "Acesso remoto a Máquinas Linux",
            description: "Certificado Acesso remoto",
            imgUrl: SoLnx3,
        },
        {
            title: "Manipulando arquivos",
            description: "Certificado Manipulando arquivos com linux",
            imgUrl: SoLnx4,
        },
        {
            title: "Gerenciando Usuários no linux",
            description: "Certificado Gerenciamento de usuários",
            imgUrl: SoLnx5,
        },
        {
            title: "Gerenciamento de pacotes Linux",
            description: "Certificado Gerenciamento de pacotes",
            imgUrl: SoLnx6,
        },
        {
            title: "Gerenciamento de Discos no Linux",
            description: "Certificado Gerenciamento de Discos",
            imgUrl: SoLnx7,
        },
        {
            title: "Copiando arquivos e manipulando processos",
            description: "Certificado copiando arquivos no linux",
            imgUrl: SoLnx8,
        },
        {
            title: "Infraestrutura como código",
            description: "Certificado Scripts de criação de estruturas",
            imgUrl: SoLnx9,
        },
        {
            title: "Servidor de arquivos como Linux",
            description: "Certificado Linux-Servidor",
            imgUrl: SoLnx10,
        },
        {
            title: "Criando um Servidor Web",
            description: "Certificado Linux-Servidor Web",
            imgUrl: SoLnx11,
        },
        {
            title: "Servidor de banco de dados",
            description: "Certificado Linux-Servidor de Banco de dados",
            imgUrl: SoLnx12,
        },
        {
            title: "Infraestrutura como código",
            description: "Certificado Provisionamento de um servidor",
            imgUrl: SoLnx13,
        },
        {
            title: "Docker",
            description: "Certificado Utilização prática no cenário de microsserviços",
            imgUrl: SoLnx14,
        },
    ]
    const certificados5 = [
        {
            title: "Introdução ao Git e ao GitHub",
            description: "Certificado Git e GitHub",
            imgUrl: Git1,
        },
        {
            title: "Criando o primeiro repositório",
            description: "Certificado Repositório Git",
            imgUrl: Git2,
        },

    ]
    const certificados6 = [
        {
            title: "Contexto da área banco de dados",
            description: "Certificado Contextualização no cenário da área de banco de dados",
            imgUrl: Bd1,
        },
        {
            title: "Power Bi Análise Avançada",
            description: "Análise avançada",
            imgUrl: Pbi3,
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
                                                <Nav.Link eventKey="sixth">Dados</Nav.Link>
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