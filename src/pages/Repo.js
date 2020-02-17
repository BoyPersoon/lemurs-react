import React from 'react';

const Repo = () => {
    return (
        <main className="page projets-page">
            <section className="portfolio-block project-no-images">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="repo-heading heading">
                                <h1>Github Repos</h1>
                                <h3>@BoyPersoon</h3>
                            </div>
                        </div>
                    </div>
                    <div id="repos" className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="loading-card loading-animate" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="loading-card loading-animate" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="loading-card loading-animate" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="loading-card loading-animate" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="loading-card loading-animate" />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="loading-card loading-animate" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Repo;