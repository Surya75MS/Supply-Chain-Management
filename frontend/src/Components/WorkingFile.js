import { Navbar_Comp } from "./NavFile";

const Working_Comp = () => {
    return (
        <div className="hero">
            <Navbar_Comp />
            {/* <section id="hero" className="hero d-flex align-items-center row" > */}
            <section>
                <div>
                    <h4><b>Step 1: </b>Owner registers wallet addresses of all the stake holders involved.</h4>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/Step1.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <hr />
                <br />

                <div>
                    <h4><b>Step 2: </b>Owner orders a medicine.</h4>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/Step2.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <hr />
                <br />

                <div>
                    <h4><b>Step 3: </b>Each of the stakeholder will approve the arrival of medicine in the following order,</h4>
                    <p>        Raw Material Supplier -> Manufacturer -> Distributor -> Retailer -> Consumer</p>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/Step3.1.png" className="img-fluid" alt="" />
                    </div>
                    <br />
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/Step3.2.png" className="img-fluid" alt="" />
                    </div>
                    <br />
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/Step3.3.png" className="img-fluid" alt="" />
                    </div>

                </div>
                <hr />
                <br />

                <div>
                    <h4><b>Step 4: </b>Everyone can track the progress of ordered medicines in the supply chain.</h4>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/Step4.1.png" className="img-fluid" alt="" />
                    </div>
                    <br />
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/Step4.2.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Working_Comp;