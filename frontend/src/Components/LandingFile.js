import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Web3 from 'web3/dist/web3.min.js'

const Landing_Comp = () => {
    const owner = '0xa39231A630EFd4E34F760cC499aA0BC915B43B75';
    const nav = useNavigate();
    const [currentAccount, setcurrentAccount] = useState();
    const [State, setState] = useState("");

    // const CheckIfOwner = async () => {
    //     // const web3 = await window.web3;
    //     const web3 = new Web3(window.ethereum);

    //     const acc = await web3.eth.getAccounts().then(console.log);
    //     setState({ account: acc[0] });
    //     console.log(State);
    //     if (acc == owner) {
    //         console.log("True");
    //     }
    //     else {
    //         console.log("False");
    //     }
    // };
    // const Connect = async () => {
    //     if (window.ethereum) {
    //         window.web3 = new Web3(window.ethereum);
    //         await window.ethereum.enable();
    //         console.log("Im in if");
    //         CheckIfOwner();

    //     } else if (window.web3) {
    //         window.web3 = new Web3(window.web3.currentProvider);
    //         console.log("Im if else if");
    //     } else {
    //         window.alert(
    //             "Non-Ethereum browser detected. You should consider trying MetaMask!"
    //         );
    //     }
    // };
    const Connect = async () => {
        const account = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error) => {
            window.alert(error.message);
            return;
        });
        window.alert(`Successfully Connected with ${account[0]}`);
        setcurrentAccount(account[0]);
    };

    function CheckMetamaskInstalled() {
        if (!window.ethereum) {
            console.log("True");
            document.getElementById("ConnectButton").innerText = "Install Metamask";
        }
        else {
            document.getElementById("ConnectButton").addEventListener('click', Connect);
            console.log("False");
        }
    }

    useEffect(() => {

        CheckMetamaskInstalled();
    }, []);

    return (
        <div>
            <div>Current Account: {currentAccount}</div>
            <header id="header" className="header fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="/" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span>DandI SCM</span>
                    </a>
                    {/* <li><a className="getstarted scrollto" onClick={CheckIfOwner}>Owner!</a></li> */}

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a id="ConnectButton" className="getstarted scrollto">Connect Wallet!</a></li>
                        </ul>
                        <i className="bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Welcome to Pharmaceutical Supply Chain Management!!</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">We offer end-end tracking to drugs to prevent conterfeiting and malpractices during transportation.</h2>

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