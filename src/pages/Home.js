import React from 'react';
import Soft1 from "../assets/img/featured/soft-1.jpg";
import Hard1 from "../assets/img/featured/hard-1.jpg";
import Host1 from "../assets/img/featured/host-1.jpg";

const Home = () => {
    return (
        <main className="page lanidng-page">
            <section className="portfolio-block block-intro">
                <div className="container">
                    <div className="avatar" />
                    <div className="about-me">
                        <p>Hello! Welcome to <strong>Lemurs web development</strong> - the home base for my freelance work as a developer.
                        </p><a className="button small" href="about.html" role="button">More about me</a>
                    </div>
                </div>
            </section>
            <section className="portfolio-block website gradient parallax">
                <div className="bg-overlay" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5 offset-lg-1 text">
                            <h3>Programming with passion</h3>
                            <p>Will having enjoyed over a decade of dabbing and working in code, I keep being baffled by tricks and techniques. Attempting to overcome this giant will always be a daunting but invigorating passion.</p>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="portfolio-laptop-mockup">
                                <div className="screen">
                                    <div className="screen-content" style={{backgroundColor: 'black'}}>
                                        <div className="terminal">
                                            <div className="header">
                                                <div className="dot red" />
                                                <div className="dot yellow" />
                                                <div className="dot green" />
                                            </div>
                                            <div className="panel">
                                                <div className="action">
                                                    <div className="command">
                                                        <div className="in typed-element" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="keyboard" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <section className="image-feature">
                                <a style={{cursor: 'pointer'}}>
                                    <header>
                                        <h3>Full-stack Development</h3>
                                    </header>
                                    <span className="image fit">
                                        <img src={Soft1} alt="" />
                                    </span>
                                    <div className="image-feature-footer">
                                        <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia pulvinar.</p>
                                    </div>
                                </a>
                            </section>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <section className="image-feature">
                                <a style={{cursor: 'pointer'}}>
                                    <header>
                                        <h3>Maintenance</h3>
                                    </header>
                                    <span className="image fit">
                                        <img src={Hard1} alt="" />
                                    </span>
                                    <div className="image-feature-footer">
                                        <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia pulvinar.</p>
                                    </div>
                                </a>
                            </section>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <section className="image-feature">
                                <a style={{cursor: 'pointer'}}>
                                    <header>
                                        <h3>Hosting &amp; Consulting</h3>
                                    </header>
                                    <span className="image fit">
                                        <img src={Host1} alt="" />
                                    </span>
                                    <div className="image-feature-footer">
                                        <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia pulvinar.</p>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;