import React from 'react';

const Project = () => {
    return (
        <main className="page project-page">
            <section className="portfolio-block project">
                <div className="container">
                    <div className="heading">
                        <h2>project name</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 project-main-img">
                            <div className="image" style={{backgroundImage: 'url("assets/img/tech/image4.jpg")'}} />
                        </div>
                        <div className="col-lg-3 project-sidebar-gallery">
                            <div className="bg-image img-block"><img className="project-side-img" src="assets/img/projects/Screenshot%202019-10-18%20at%2013.02.18.png" /></div>
                            <div className="bg-image img-block"><img className="project-side-img" src="assets/img/projects/Screenshot%202019-10-18%20at%2013.02.18.png" /></div>
                            <div className="bg-image img-block"><img className="project-side-img" src="assets/img/projects/Screenshot%202019-10-18%20at%2013.02.18.png" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-9 offset-md-1 offset-lg-0 info">
                            <div className="loading-text loading-animate loading-small" />
                            <div className="loading-text loading-animate" />
                            <div className="loading-text loading-animate" />
                        </div>
                        <div id="meta" className="col-12 col-md-3 offset-md-1 offset-lg-0 meta">
                            <div className="meta-block tags">
                                <span className="meta-heading">Status</span>
                                <span className="status" />
                            </div>
                            <div className="meta-block tags">
                                <span className="meta-heading">Period</span>
                                <span className="date">25-04-2017</span>
                            </div>
                            <div className="meta-block tags">
                                <span className="meta-heading">Contractor</span>
                                <span className="date">25-04-2017</span>
                            </div>
                            <div className="meta-block tags">
                                <span className="meta-heading">Tags</span>
                                <a href="#">Resource</a>
                                <a href="#">Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="more-projects">
                        <h3 className="text-center">More Projects</h3>
                        <div className="row gallery">
                            <div className="col-md-4 col-lg-3">
                                <div className="loading-card loading-animate" />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="loading-card loading-animate" />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="loading-card loading-animate" />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="loading-card loading-animate" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Project;