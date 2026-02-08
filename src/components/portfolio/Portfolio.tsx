import { useMemo } from 'react';
import Slider from "react-slick";

// Asset imports
import work from '../../images/work.jpg';
import dailySale from '../../images/DailySale.png';
import eMart from '../../images/eMart.png';
import techfynder from '../../images/techfynder.png';
import testtriangle from '../../images/testtriangle.png';
import myEquifax from '../../images/myequifax_laptop.png';

import './Portfolio.scss';

// 1. Define the shape of our Portfolio items
interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    url: string;
    image: string;
}

const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        id: 'myEquifax',
        title: 'myEquifax',
        url: 'https://my.equifax.com',
        image: myEquifax,
        description: 'myEquifax is a free self-service portal designed to give you direct control over your credit information and security.'
    },
    {
        id: 'techfynder',
        title: 'Techfynder',
        url: 'http://techfynder.com/',
        image: techfynder,
        description: 'Dedicated platform for IT professionals to connect globally. Built with experience in Angular 7 and Node Js.'
    },
    {
        id: 'dailySale',
        title: 'DailySale',
        url: 'http://daily-sale.herokuapp.com/',
        image: dailySale,
        description: 'Online web platform for posting free ads and contacting users.'
    },
    {
        id: 'eMart',
        title: 'eMart',
        url: 'https://emart-205419.firebaseapp.com/',
        image: eMart,
        description: 'eCommerce website built on Angular 4 and Firebase.'
    },
    {
        id: 'testtriangle',
        title: 'Test Triangle',
        url: 'https://www.testtriangle.com/',
        image: testtriangle,
        description: 'Emerging IT service provider specializing in application testing, DevOps, and RPA.'
    }
];

export const Portfolio: React.FC = () => {
    const sliderSettings = useMemo(() => ({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
        ]
    }), []);

    return (
        <section
            id="section-4"
            className="section-portfolio"
            style={{ backgroundImage: `url(${work})` }}
        >
            <div className="container">
                <div className="section__head section--header-underline">
                    <h2 className="section__title">Portfolio</h2>
                </div>

                <div className="section__body">
                    <Slider className="slider-portfolio" {...sliderSettings}>
                        {PORTFOLIO_DATA.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="slider__slide"
                            >
                                <div className="slider__inner">
                                    <div
                                        className="slider__image"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                    <div className="slider__overlay">
                                        <div className="slider__overlay-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};