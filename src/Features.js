function Features() {
    return (
        <div class="container px-4 py-5" id="hanging-icons">
            <h1 class="pb-2 border-bottom">Job Categories</h1>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="col d-flex align-items-start">
                    <div>
                        <p><h2>Data Jobs</h2></p>
                        <img src="images/data-icon.svg" width="330" height="310"/>
                        <p></p>Data Science, Data Analyst, Data specialist, Machine Learning Engineer, Data Engineer & More.<p></p>
                        <a href="#" class="btn btn-primary" style={{"position": "absolute", "bottom": "0"}}>Browse Jobs</a>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div>
                        <p><h2>Software Development Jobs</h2></p>
                        <img src="images/dev-icon.svg" width="330" height="310"/>
                        <p></p>Software Engineer, Front-end/Back-end Developer, Full-Stack Developer, Web Developer & More.<p></p>
                        <a href="#" class="btn btn-primary" style={{"position": "absolute", "bottom": "0"}}>Browse Jobs</a>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div>
                        <p><h2>Product Jobs</h2></p>
                        <img src="images/product-icon.svg" width="330" height="310"/>
                        <p></p>Product Manager, Product Owner, Delivery Manager, User Experience Designer, Product Designer & More<p></p>
                        <a href="#" class="btn btn-primary">Browse Jobs</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;