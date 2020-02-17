import React from 'react';
import StdLogo from "../assets/img/avatars/logo-text.png";

const Contact = () => {
    return (
        <main className="page contact-page">
            <section className="portfolio-block contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <header className="major">
                                <h2>Contact details</h2>
                                <p />
                            </header>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div>
                                <h3>Personal Details</h3>
                                <div className="row">
                                    <div className="col-1"><i className="fas fa-user" /></div>
                                    <div className="col-9"><span>Boy Persoon</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1"><i className="fas fa-map-marker-alt" /></div>
                                    <div className="col-9"><span>Genève, Suisse</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1"><i className="fas fa-envelope" /></div>
                                    <div className="col-9"><span><a href="mailto:b.persoon@lemursdev.com?Subject=Hi%20There">b.persoon@lemursdev.com</a></span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1"><i className="fas fa-mobile-alt" /></div>
                                    <div className="col-9"><span><a href="http://192.168.1.27:8080/true">+31 648903913</a></span></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="icons">
                                            <li><a className="icon brands fa-github" href="https://github.com/BoyPersoon" target="_blank" /></li>
                                            <li><a className="icon brands fa-linkedin" href="https://www.linkedin.com/in/boy-persoon-webdeveloper/" target="_blank" /></li>
                                            <li><a className="fab solid fa-stack-overflow" href="https://stackoverflow.com/users/7467381/boy-persoon" target="_blank" /></li>
                                            <li><a className="icon solid fa-envelope" href="mailto:b.persoon@lemursdev.com" target="_blank" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div>
                                <h3>Lemurs Webdevelopment</h3>
                                <div className="row">
                                    <div className="col-1" />
                                    <div className="col-9"><span>KVK 67732860</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1" />
                                    <div className="col-9"><span>VAT NL209076689B01</span></div>
                                </div><img src={StdLogo} style={{width: '175px', margin: '30px 0 0 38px'}} /></div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Get In Touch</h3>
                            <p>In need of information, advice, work or you just want to drop in and say "hi!", feel free to do so below!</p>
                            <br />
                            <form method="post" action="#">
                                <div className="row gtr-uniform gtr-50">
                                    <div className="col-md-6 col-sm-12">
                                        <input type="text" name="name" id="name" defaultValue placeholder="Name" />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <input type="email" name="email" id="email" defaultValue placeholder="Email" />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <input type="checkbox" id="copy" name="copy" />
                                        <label htmlFor="copy">Email me a copy of this message</label>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <input type="checkbox" id="human" name="human" defaultChecked />
                                        <label htmlFor="human">I am a human and not a robot</label>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" id="message" placeholder="Enter your message" rows={6} defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input type="submit" defaultValue="Send Message" /></li>
                                            <li><input type="reset" defaultValue="Reset" className="alt" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;