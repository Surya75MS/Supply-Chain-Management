export const Navbar_Comp = () => {

    return (
        // <header id="header" className="header ">
        //     <div className="container-fluid container-xl d-flex align-items-center justify-content-between" style={{background:"white"}}>

        //         <a href="/" className="logo d-flex align-items-center">
        //             <img src="assets/img/logo.png" alt="" />
        //             <span>Pharma SCM</span>
        //         </a>

        //         <nav class="navbar navbar-expand-lg bg-light">
        //             <div class="container-fluid">
        //                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span class="bi-list navbar-toggler-icon"></span>
        //                 </button>
        //                 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //                     <div class="navbar-nav" style={{background:"white"}}>
        //                         <a class="nav-link getstarted scrollto navs" href="/">Home</a>
        //                         <a class="nav-link getstarted scrollto navs" href="/working">Working</a>
        //                         <a class="nav-link getstarted scrollto navs" href="/contact">Contact</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </nav>
        //     </div>
        // </header>

        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    <img src="assets/img/logo.png" alt="" />
                    <span>Pharma SCM</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="getstarted scrollto nav-link navs" href="/">Home</a>
                        <a class="getstarted scrollto nav-link navs" href="/working">Take a tour</a>
                        <a class="getstarted scrollto nav-link navs" href="/contact">Contact</a>
                    </div>
                </div>

            </div>
        </nav>
    );
};