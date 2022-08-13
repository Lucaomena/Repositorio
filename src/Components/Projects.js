import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import insta from "../assets/img/insta.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import construcao from "../assets/img/construcao.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Recriando pagina do Instagram",
      description: "Design & Development",
      imgUrl: insta,
      html_url:"https://github.com/Lucaomena/RecriandoPg.git",
      button1:"",
      html_url: "https://github.com/GabrielCostaLuiz/baseReact",
      homepage: "https://gabrielcostaluiz.github.io/baseReact/",
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
      button1:"",
      
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
  ];
  const projects2 = [
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
  ]
  const projects3 = [
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
    {
      title: "Em construção",
      description: "Carregando...",
      imgUrl: construcao,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Segue alguns de meus principais projetos</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Css/Html</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Js</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Java</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
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
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
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
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}