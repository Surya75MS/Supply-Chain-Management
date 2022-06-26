import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Web3 from 'web3/dist/web3.min.js'
import { Navbar_Comp } from './NavFile';

const Landing_Comp = () => {
    const nav = useNavigate();

    const Connect = async () => {
        // Getting wallet address of current account.
        const account = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error) => {
            window.alert(error.message);
            return;
        });
        window.alert(`Successfully Connected with ${account[0]}`);
        document.getElementById("ConnectButton").removeEventListener('click', Connect);
        document.getElementById("ConnectButton").innerText = "Successfully Connected!";
        nav("/steps");
    };

    function CheckMetamaskInstalled() {
        if (!window.ethereum) {
            document.getElementById("ConnectButton").innerText = "Install Metamask";
        }
        else {
            document.getElementById("ConnectButton").addEventListener('click', Connect);
        }
    }

    useEffect(() => {

        CheckMetamaskInstalled();
    }, []);

    return (
        <div >
            <Navbar_Comp />
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Welcome to Pharmaceutical Supply Chain Management!!</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">We offer end-end tracking to drugs to prevent conterfeiting and malpractices during transportation.</h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div class="text-center text-lg-start">
                                    <a id="ConnectButton" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        Connect with Goerli Chain!
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
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

export default Landing_Comp;