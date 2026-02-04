import React from 'react';
import './Intro.scss';
import code from '../../images/code.jpeg';
import about from '../../images/about.jpg';
import home from '../../images/home.jpg';
import contact from '../../images/contact.png';
import work from '../../images/work.jpg';
import resume from '../../images/resume.jpg';

interface IntroProps {
    isFixed?: boolean;
}

const backgroundImages: Record<string, any> = {
    intro: { backgroundImage: `url(${code})` },
    about: { backgroundImage: `url(${about})` },
    work: { backgroundImage: `url(${work})` },
    contact: { backgroundImage: `url(${contact})` },
    resume: { backgroundImage: `url(${resume})` },
    home: { backgroundImage: `url(${home})` },
};

export const Intro: React.FC<IntroProps> = ({ isFixed }) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const id = targetId.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const navItems = [
        { id: 'section-1', title: 'Home', num: '1', style: backgroundImages.home, class: 'home' },
        { id: 'section-2', title: 'About Me', num: '2', style: backgroundImages.about, class: 'about' },
        { id: 'section-3', title: 'Resume', num: '3', style: backgroundImages.resume, class: 'resume' },
        { id: 'section-4', title: 'Portfolio', num: '4', style: backgroundImages.work, class: 'works' },
        { id: 'section-5', title: 'Contact', num: '5', style: backgroundImages.contact, class: 'contact' },
    ];

    return (
        <div
            style={backgroundImages.intro}
            id="section-1"
            className="intro"
        >
            <nav className={isFixed ? 'nav-main fixed' : 'nav-main'}>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id} style={item.style} className={item.class}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleScroll(e, item.id)}
                            >
                                <span className="nav__title">{item.title}</span>
                                <span className="nav__number">{item.num}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};