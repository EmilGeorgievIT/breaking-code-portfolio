import Slider, { Settings } from "react-slick";

// Asset imports
import work from '../../images/work.jpg';
import dailySale from '../../images/DailySale.png';
import eMart from '../../images/eMart.png';
import techfynder from '../../images/techfynder.png';
import testtriangle from '../../images/testtriangle.png';

import './Portfolio.scss';

export const Portfolio: React.FC = () => {
    const backgroundImages: Record<string, React.CSSProperties> = {
        work: { backgroundImage: `url(${work})` },
        dailySale: { backgroundImage: `url(${dailySale})` },
        eMart: { backgroundImage: `url(${eMart})` },
        testtriangle: { backgroundImage: `url(${testtriangle})` },
        techfynder: { backgroundImage: `url(${techfynder})` },
    };

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <section id="section-4" style={backgroundImages.work} className="section-portfolio">
            <div className="container">
                <div className="section__head section--header-underline">
                    <h2 className="section__title">Portfolio</h2>
                </div>

                <div className="section__body">
                    <Slider className="slider-portfolio" {...settings}>
                        {/* Techfynder */}
                        <a href="http://techfynder.com/" className="slider__slide">
                            <div className="slider__inner">
                                <div style={backgroundImages.techfynder} className="slider__image" />
                                <div className="slider__overlay">
                                    <div className="slider__overlay-content">
                                        <h3>Techfynder</h3>
                                        <p>
                                            Dedicated platform for IT professionals to connect globally.
                                            Built with experience in Angular 7 and Node Js.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* DailySale */}
                        <a href="http://daily-sale.herokuapp.com/" className="slider__slide">
                            <div className="slider__inner">
                                <div style={backgroundImages.dailySale} className="slider__image" />
                                <div className="slider__overlay">
                                    <div className="slider__overlay-content">
                                        <h3>DailySale</h3>
                                        <p>Online web platform for posting free ads and contacting users.</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* eMart */}
                        <a href="https://emart-205419.firebaseapp.com/" className="slider__slide">
                            <div className="slider__inner">
                                <div style={backgroundImages.eMart} className="slider__image" />
                                <div className="slider__overlay">
                                    <div className="slider__overlay-content">
                                        <h3>eMart</h3>
                                        <p>eCommerce website built on Angular 4 and Firebase.</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Test Triangle */}
                        <a href="https://www.testtriangle.com/" className="slider__slide">
                            <div className="slider__inner">
                                <div style={backgroundImages.testtriangle} className="slider__image" />
                                <div className="slider__overlay">
                                    <div className="slider__overlay-content">
                                        <h3>Test Triangle</h3>
                                        <p>
                                            Emerging IT service provider specializing in application testing,
                                            DevOps, RPA, and custom software development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Slider>
                </div>
            </div>
        </section>
    );
};
