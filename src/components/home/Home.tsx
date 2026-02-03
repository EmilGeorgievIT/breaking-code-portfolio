import { useEffect, useRef, useState } from 'react';
import { Header } from '../header/Header';
import { Intro } from '../intro/Intro';
import { About } from '../about/About';
import { Resume } from '../resume/Resume';
import { Portfolio } from '../portfolio/Portfolio';
import { Contact } from '../contact/Contact';


export const Home: React.FC = () => {
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const backToTopRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY >= 600);
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="wrapper" ref={backToTopRef}>
                <Header isFixed={isFixed} />
                <Intro isFixed={isFixed} />
                <About />
                <Resume />
                <Portfolio />
                <Contact />

                <a
                    href="#home"
                    onClick={scrollToTop}
                    className={isFixed ? 'back-top fixed' : 'back-top'}
                >
                    <svg
                        className="ico ico-back-top"
                        width="30px"
                        height="30px"
                        viewBox="0 0 31.479 31.479"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M26.477,10.274c0.444,0.444,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-8.047-8.047
              v26.555c0,0.619-0.492,1.111-1.111,1.111c-0.619,0-1.127-0.492-1.127-1.111V3.813l-8.031,8.047c-0.444,0.429-1.159,0.429-1.587,0
              c-0.444-0.444-0.444-1.143,0-1.587l9.952-9.952c0.429-0.429,1.143-0.429,1.571,0L26.477,10.274z" />
                    </svg>
                </a>
            </div>
        </>
    );
};
