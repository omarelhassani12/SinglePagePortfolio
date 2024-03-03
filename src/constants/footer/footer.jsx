// Footer.jsx

import './footer.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="foot">
                <div className="footer-content">
                    <h2>Contact Me</h2>
                    <p>Feel free to get in touch with any inquiries or collaborations.</p>
                    <ul className="contact-links">
                        <li>Email: <b>elhassani.omar12@gmail.com</b></li>
                        <li><a href='https://omarelhassani.netlify.app'><b>Full Portfolio</b></a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h2>Follow Me</h2>
                    <ul className="social-links">
                        <li><a href="https://www.linkedin.com/in/omarelhassani12" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/omarelhassani12" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-info">
                <p>&copy; 2024 Omar EL HASSANI. All rights reserved.</p>
                <p>Designed and developed with ❤️ by <a href="https://omarelhassani.netlify.app">Omar</a></p>
            </div>
        </footer>
    );
}

export default Footer;
