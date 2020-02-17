import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="copyright">
                    <p>© 2020 Lemurs Webdevelopment. All rights reserved. | KVK 67732860 | VAT NL209076689B01<br />Coded with &nbsp;☕ and &nbsp;❤</p>
                </div>
                <ul className="icons">
                    <li><a className="icon brands fa-github" href="https://github.com/BoyPersoon" target="_blank" /></li>
                    <li><a className="icon brands fa-linkedin" href="https://www.linkedin.com/in/boy-persoon-webdeveloper/" target="_blank" /></li>
                    <li><a className="fab solid fa-stack-overflow" href="https://stackoverflow.com/users/7467381/boy-persoon" target="_blank" /></li>
                    <li><a className="icon solid fa-envelope" href="mailto:b.persoon@lemursdev.com" target="_blank" /></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;