import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar_Comp } from './NavFile';

const Admin_Comp = () => {
    const nav = useNavigate();
    return (
        <div>
            <Navbar_Comp />
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h3>Follow below steps:</h3>
                            <ul>
                                <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/register")}>Register Stakeholders</a></li>
                                <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/ordermed")}>Order Medicine</a></li>
                                <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/supply")}>Control Supply Chain</a></li>
                                <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/track")}>Track Medicine</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    );
}

export default Admin_Comp;