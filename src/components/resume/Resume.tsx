import resume from '../../images/resume.jpg';
import { Link } from 'react-router';
import './Resume.scss';

interface SkillProps {
    title: string;
    percentage: string;
}

const Skill: React.FC<SkillProps> = ({ title, percentage }) => (
    <li>
        <p>
            <span className="progress-list-title">{title}</span>
            <span className="progress-list-value">{percentage}</span>
        </p>
        <div className="progress">
            <div style={{ width: percentage }} className="progress__bar"></div>
        </div>
    </li>
);

export const Resume: React.FC = () => {
    const backgroundImage: React.CSSProperties = {
        backgroundImage: `url(${resume})`,
    };

    return (
        <section id="section-3" style={backgroundImage} className="section-resume">
            <div className="section__head section--header-underline">
                <h2 className="section__title">Resume</h2>
            </div>

            <div className="section__body">
                <div className="container container--small">
                    {/* Education Section */}
                    <div className="resume resume-education">
                        <div className="resume__head">
                            <h4 className="resume__title">Education</h4>
                        </div>
                        <div className="resume__body">
                            <ul className="list-resume">
                                <li>
                                    <h4>TECHNICAL UNIVERSITY-VARNA</h4>
                                    <span className="time">2014 - 2018</span>
                                    <p>Bachelor Computer Science and Technologies</p>
                                </li>
                                <li>
                                    <h4>SCHOOL PGD "YURI GAGARIN"</h4>
                                    <span className="time">2010 - 2013</span>
                                    <p>Professional Automechanic</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Employment Section */}
                    <div className="resume resume-education">
                        <div className="resume__head">
                            <h4 className="resume__title">Employment</h4>
                        </div>
                        <div className="resume__body">
                            <ul className="list-resume">
                                <li>
                                    <h4>TestTriangle - Front End Developer</h4>
                                    <span className="time">2019 Jan – Present</span>
                                    <p>
                                        I was working on Techfynder website which is a dedicated platform for IT,
                                        Contract Professionals, to connect globally with Businesses, matching skills,
                                        rates, experience, and location. I learned how to working with Angular 7 and Node Js.
                                    </p>
                                </li>
                                <li>
                                    <h4>2Create - Front End Developer</h4>
                                    <span className="time">2017 Jan – 2018 Dec</span>
                                    <p>
                                        Initially joining the company as a trainee, I have progressed as Front-End
                                        developer. My role requires to create, develop and execute web sites for the
                                        Company’s clients.
                                    </p>
                                </li>
                                <li>
                                    <h4>Smart Home Sys - Web Administrator</h4>
                                    <span className="time">Oct 2016 - Dec 2016</span>
                                    <p>
                                        I worked on international news website. During the internship, I gained
                                        experience on how to create my own websites CMS systems and improved my skills
                                        and knowledge in PHP.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="resume resume-education">
                        <div className="resume__head">
                            <h4 className="resume__title">General Skills</h4>
                        </div>
                        <div className="resume__body">
                            <ul className="list-skills">
                                <Skill title="HTML5" percentage="95%" />
                                <Skill title="JS" percentage="90%" />
                                <Skill title="Angular 4+" percentage="90%" />
                                <Skill title="React" percentage="70%" />
                                <Skill title="WebPack" percentage="60%" />
                                <Skill title="jQuery" percentage="77%" />
                                <Skill title="Express" percentage="80%" />
                                <Skill title="CSS" percentage="99%" />
                                <Skill title="LESS / SASS" percentage="99%" />
                                <Skill title="WordPress" percentage="58%" />
                            </ul>
                        </div>
                    </div>

                    <div className="section__actions">
                        <Link to="/files/EmilGeorgievCV.docx" target="_blank" download className="btn">
                            Download CV
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};