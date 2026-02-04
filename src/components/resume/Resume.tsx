import React from 'react';
import resumeImg from '../../images/resume.jpg';
import { Link } from 'react-router';
import './Resume.scss';

// --- Types ---
interface SkillProps {
    title: string;
    percentage: string;
}

interface ResumeEntry {
    title: string;
    subtitle: string;
    period: string;
    description?: string;
}

// --- Sub-Components ---
const Skill: React.FC<SkillProps> = ({ title, percentage }) => (
    <li>
        <p>
            <span className="progress-list-title">{title}</span>
            <span className="progress-list-value">{percentage}</span>
        </p>
        <div className="progress">
            <div style={{ width: percentage }} className="progress__bar" role="progressbar" aria-valuenow={parseInt(percentage)} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
    </li>
);

const ResumeItem: React.FC<ResumeEntry> = ({ title, period, subtitle, description }) => (
    <li>
        <h4>{title}</h4>
        <span className="time">{period}</span>
        <h5>{subtitle}</h5>
        {description && <p>{description}</p>}
    </li>
);

// --- Content Data ---
const EDUCATION: ResumeEntry[] = [
    { title: "TECHNICAL UNIVERSITY-VARNA", period: "2014 - 2018", subtitle: "Bachelor Computer Science and Technologies" },
    { title: "SCHOOL PGD 'YURI GAGARIN'", period: "2010 - 2013", subtitle: "Professional Automechanic" },
];

const EMPLOYMENT: ResumeEntry[] = [
    {
        title: "Bosch Digital",
        subtitle: "Senior Front End Developer",
        period: "2022 Jan – till now",
        description: "NDA"
    },
    {
        title: "Equifax",
        subtitle: "Senior Front End Developer",
        period: "2020 May – 2021 Dec",
        description: "I worked on a credit score management platform, where my responsibilities included developing new features, providing ongoing support, and maintaining the system. I was also partially involved in optimizing the platform by contributing to its transition toward a micro front-end architecture."
    },
    {
        title: "TestTriangle",
        subtitle: "Middle Front End Developer",
        period: "2019 Jan – 2020 May",
        description: "My first project involved creating a new website for Test Triangle. My second project focused on developing a large platform for posting job opportunities for contractors. Through these projects, I gained hands-on experience with the technologies below."
    },
    {
        title: "2Create",
        subtitle: "Front End Developer",
        period: "2017 Jan – 2018 Dec",
        description: "I joined the company as a trainee and progressed into a Junior Front-End Developer role. My responsibilities include designing, developing, and maintaining websites for the company’s clients. "
    },
    {
        title: "Smart Home Sys Ltd",
        subtitle: "Web Administrator",
        period: "2016 Dec – 2017 Mar",
        description: "I worked on an international news website. During my internship, I gained experience in developing content management systems (CMS) and strengthened my skills and knowledge in PHP."
    }
];

const SKILLS: SkillProps[] = [
    { title: "HTML5", percentage: "95%" },
    { title: "JS/TS", percentage: "90%" },
    { title: "Angular 19+", percentage: "90%" },
    { title: "Cypress", percentage: "90%" },
    { title: "CSS (SASS/LESS)", percentage: "99%" },
    { title: "React", percentage: "70%" },
];

// --- Main Component ---
export const Resume: React.FC = () => {
    const sectionStyle: React.CSSProperties = {
        backgroundImage: `url(${resumeImg})`,
    };

    return (
        <section id="section-3" style={sectionStyle} className="section-resume">
            <div className="section__head section--header-underline">
                <h2 className="section__title">Resume</h2>
            </div>

            <div className="section__body">
                <div className="container container--small">

                    {/* Education */}
                    <article className="resume">
                        <div className="resume__head">
                            <h4 className="resume__title">Education</h4>
                        </div>
                        <div className="resume__body">
                            <ul className="list-resume">
                                {EDUCATION.map((edu, i) => <ResumeItem key={i} {...edu} />)}
                            </ul>
                        </div>
                    </article>

                    {/* Employment */}
                    <article className="resume">
                        <div className="resume__head">
                            <h4 className="resume__title">Employment</h4>
                        </div>
                        <div className="resume__body">
                            <ul className="list-resume">
                                {EMPLOYMENT.map((job, i) => <ResumeItem key={i} {...job} />)}
                            </ul>
                        </div>
                    </article>

                    {/* Skills */}
                    <article className="resume">
                        <div className="resume__head">
                            <h4 className="resume__title">General Skills</h4>
                        </div>
                        <div className="resume__body">
                            <ul className="list-skills">
                                {SKILLS.map(skill => <Skill key={skill.title} {...skill} />)}
                            </ul>
                        </div>
                    </article>

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