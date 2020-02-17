import React from 'react';

const About = () => {
    return (
        <main className="page about-page">
            <section className="portfolio-block">
                <div className="container">
                    <div className="avatar avatar-pf"/>
                    <header className="major">
                        <h2>About Me</h2>
                        <p>Up close &amp; personal</p>
                    </header>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className>Career</h3>
                            <p>I am a professional and dedicated web developer with a knack for critical thinking. With already a few years of practical experience in the field as developer, I now have integral knowledge of the full-cycle of web software development. While I have robust technical skills, my background highlights inter-disciplinary diversity of thought.</p>
                            <p>Find my complete professional profile on LinkedIn:</p>
                            <a className="button small alt" role="button" href="https://www.linkedin.com/in/boy-persoon-webdeveloper/" target="_blank">Go to my LinkedIn</a>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className>Personal</h3>
                            <p>Tell me about you! As a curious person I like to know what is on people's mind. I enjoy travelling and getting myself in awkward spots. Working behind my laptop has given me the opportunity to work and traveling.</p>
                            <p>I don't shy away from a little competition, feel free to <strong>challenge</strong> me below:</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;