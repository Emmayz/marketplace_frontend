function NavBar() {

    return (
        <div id="wrapper">
            <header id="header-container" className="fullwidth">
                <div id="header">
                    <div className="container">
                        {/* Left Side Content */}
                        <div className="left-side">
                            {/* logo */}
                            <div id="logo">
                                <a href="index.html"><img src="images/whitedoveslogo.png" alt=""/></a>
                            </div>
                            {/* Main Navigation */}
                            <nav id="navigation">
                                <ul id="responsive">
                                    <li><a href="index.html" className="current">Home</a></li>
                                    <li><a href="#">Find Freelancers</a></li>
                                    <li><a href="#">Find Jobs</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </nav>
                            <div className="clearfix"></div>
                            </div>
                        {/* Right Side Content */}
                        <div className="right-side">
                            {/* User Notifications */}
                            <div className="header-widget">
                                {/* Notifications */}
                                <div className="header-notifications">
                                    {/* Trigger */}
                                    <div className="header-notifications-trigger">	
                                        <a className="btn btn-primary" style={{"margin-top": "22px"}} href="#" role="button">Register</a>
                                    </div>
                                </div>
                                {/* Messages */}
                                <div className="header-notifications">
                                    <div className="header-notifications-trigger">
                                        <a className="btn btn-success" style={{"margin-top": "22px"}} href="#" role="button">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default NavBar;

