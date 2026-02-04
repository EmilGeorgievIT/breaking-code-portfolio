import React from 'react';
import logo from '../../images/logo2.png';
import './Header.scss';

interface HeaderProps {
    isFixed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isFixed }) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        console.log(`handleScroll called with targetId: ${targetId}`);
        e.preventDefault();
        closeMenu(); 

        const id = targetId.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
            console.log(`Scrolling to element with id: ${id}`);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            console.warn(`Element with id ${id} not found!`);
        }
    };

    // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    //     e.preventDefault();
    //     const element = document.getElementById(targetId.replace('#', ''));
    //     if (element) {
    //         element.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start',
    //         });
    //     }
        
    // };

    const closeMenu = () => {
        const burger = document.querySelector('.burger');
        const x = document.querySelector('.x');
        const y = document.querySelector('.y');
        const z = document.querySelector('.z');
        const circle = document.querySelector('.circle');
        const menu = document.querySelector('.menu');

        x?.classList.remove('rotate45');
        x?.classList.add('rotate30');
        z?.classList.remove('rotate135');
        z?.classList.add('rotate150');
        burger?.classList.remove('open');
        circle?.classList.remove('expand');
        menu?.classList.remove('animate');

        setTimeout(() => {
            x?.classList.remove('rotate30');
            z?.classList.remove('rotate150');
        }, 50);

        setTimeout(() => {
            y?.classList.remove('hidden');
            x?.classList.remove('collapse');
            y?.classList.remove('collapse');
            z?.classList.remove('collapse');
        }, 70);
    };

    const openMenu = () => {
        const burger = document.querySelector('.burger');
        const x = document.querySelector('.x');
        const y = document.querySelector('.y');
        const z = document.querySelector('.z');
        const circle = document.querySelector('.circle');
        const menu = document.querySelector('.menu');

        circle?.classList.toggle('expand');
        burger?.classList.toggle('open');
        x?.classList.toggle('collapse');
        y?.classList.toggle('collapse');
        z?.classList.toggle('collapse');
        menu?.classList.toggle('animate');

        setTimeout(() => {
            y?.classList.toggle('hidden');
            x?.classList.toggle('rotate30');
            z?.classList.toggle('rotate150');
        }, 70);

        setTimeout(() => {
            x?.classList.toggle('rotate45');
            z?.classList.toggle('rotate135');
        }, 120);
    };

    const navLinks = [
        { name: 'Home', href: '#section-1' },
        { name: 'About Me', href: '#section-2' },
        { name: 'Resume', href: '#section-3' },
        { name: 'Portfolio', href: '#section-4' },
        { name: 'Contact', href: '#section-5' },
    ];

    return (
        <header className={isFixed ? 'header fixed' : 'header'}>
            <div className="header__inner">
                <a href='/' className="logo">
                    <img src={logo} alt="Logo" />
                </a>

                {window.innerWidth <= 767 && (
                    <div className={isFixed ? 'nav-mobile fixed' : 'nav-mobile'}>
                        <div className="circle"></div>
                        <div className="menu">
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleScroll(e, link.href)}
                                        >
                                            <span className='nav__title'>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div onClick={openMenu} className="burger">
                            <div className="x"></div>
                            <div className="y"></div>
                            <div className="z"></div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};