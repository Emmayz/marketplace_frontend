function Hero() {
    return (
        <div className="intro-banner" data-background-image="images/home-background.jpg">
            <div className="container">
                {/* Intro Headline */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-headline">
                            <h3>
                                <strong>The World's Leading Tech Marketplace.</strong>
                                <br/>
                                <span>Thousands of small businesses use <strong className="color">White Doves</strong> to turn their ideas into reality.</span>
                            </h3>
                        </div>
                    </div>
                </div>
               {/* Stats */}
                <div className="row">
                    <div className="col-md-12">
                        <ul className="intro-stats margin-top-45 hide-under-992px">
                            <li>
                                <strong className="counter">0</strong>
                                <span>Jobs Posted</span>
                            </li>
                            <li>
                                <strong className="counter">0</strong>
                                <span>Registered Freelancers</span>
                            </li>
                            <li>
                                <strong className="counter">0</strong>
                                <span>Registered Companies</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="background-image-container" style={{"background-image": "url(images/home-background.jpg)"}}></div>
        </div>
);
}

export default Hero;