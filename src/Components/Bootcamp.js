import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CertLinux from "../assets/img/certificados/SoLnxXp.png";
import CertSantander from "../assets/img/certificados/Santander.png";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import fundo from "../assets/img/banner-1.webp";
import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from "react";
import { render } from "react-dom";


export const Bootcamp = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
        <section className="bootcamp" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bootcamp-bx wow zoomIn">
                            <h2>Bootcamp</h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme bootcamp-slider">
                                <div className="item">
                                    <img src={CertLinux} alt="Image" />
                                    <h5>Linux Experience</h5>
                                </div>
                                <div className="item">
                                    <img src={CertSantander} alt="Image" />
                                    <h5>Santander Fullstack Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={CertLinux} alt="Image" />
                                    <h5>Linux Experience</h5>
                                </div>
                                <div className="item">
                                    <img src={CertSantander} alt="Image" />
                                    <h5>Santander Fullstack Developer</h5>
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