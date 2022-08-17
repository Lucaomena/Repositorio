import { Col } from "react-bootstrap";



export const ProjectCard = ({ title, description, imgUrl, html_url,button1,homepage }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <link href={html_url}></link>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <div>
                <a href={button1}>Ver no Github</a>
                {homepage && (
                <a href={button1} target="_blank" rel="noreferrer">
            Ver no Site
          </a>
          )}
            </div>

        </Col>
    )
}