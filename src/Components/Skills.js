import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import fundo from "../assets/img/banner-1.webp";
import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from "react";
import { render } from "react-dom";


export const Skills = () => {
    const percentage = 90;
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Soft Skills</h2>
                            <p> As habilidades humanas sempre foram importantes na história. No passado eram importantes, no presente são superimportantes e, no futuro, serão fundamentais! (Glauter F. Jannuzzi) </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Ouvir as pessoas</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Facilidade em expressar ideias</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Atitude positiva frente aos desafios</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Empatia com o sentimento dos outros</h5>
                                </div>

                                <div className="circular">
                                    <div style={{ width: 140, height: 140 }}>
                                        <CircularProgressbarWithChildren value={percentage} >
                                            <div style={{ fontSize: 30, marginTop: -0 }}>
                                                <strong>{percentage}% </strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    <h5>Pensamento crítico com foco em buscar soluções</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image" src={fundo} alt="Image" />
        </section>
    )
}