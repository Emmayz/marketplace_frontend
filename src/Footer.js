function Footer() {
    return (
        <div id="footer">
            {/* Footer Middle Section */}
            <div className="footer-middle-section">
                <div className="container">
                    <div className="row">
                        {/* Links */}
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-links">
                                <h3>For Candidates</h3>
                                <ul>
                                    <li><a href="#"><span>Browse Jobs</span></a></li>
                                    <li><a href="#"><span>Add Resume</span></a></li>
                                    <li><a href="#"><span>Job Alerts</span></a></li>
                                    <li><a href="#"><span>My Bookmarks</span></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Links */}
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-links">
                                <h3>For Employers</h3>
                                <ul>
                                    <li><a href="#"><span>Browse For Candidates</span></a></li>
                                    <li><a href="#"><span>Post a Job</span></a></li>
                                    <li><a href="#"><span>Post a Task</span></a></li>
                                    <li><a href="#"><span>Plans & Pricing</span></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Links */}
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-links">
                                <h3>Helpful Links</h3>
                                <ul>
                                    <li><a href="#"><span>Contact Information</span></a></li>
                                    <li><a href="#"><span>Privacy Policy</span></a></li>
                                    <li><a href="#"><span>Terms of Condition</span></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Links */}
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-links">
                                <h3>Account</h3>
                                <ul>
                                    <li><a href="#"><span>Register</span></a></li>
                                    <li><a href="#"><span>Sign In</span></a></li>
                                    <li><a href="#"><span>My Profile</span></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Newsletter */}
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <h3><i className="icon-feather-mail"></i> Sign Up For a Newsletter</h3>
                            <p>Weekly breaking news, analysis and cutting edge advices on job searching.</p>
                            <form action="#" method="get" className="newsletter">
                                <input type="text" name="fname" placeholder="Enter your email address"/>
                                <button type="submit"><i className="icon-feather-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Copyrights */}
            <div className="footer-bottom-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            © 2021 <strong>White Doves LLC</strong>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;