import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar_Comp } from './NavFile';

const Step_Comp = () => {
    const nav = useNavigate();
    const [currentAccount, setcurrentAccount] = useState("");

    const getAccount = async () => {
        // Getting wallet address of current account.
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error) => {
            window.alert(error.message);
            return;
        });
        // return (currentAccount);
        setcurrentAccount(account);
    };

    const Display = () => {
        const owner = "0xa39231a630efd4e34f760cc499aa0bc915b43b75";
        // const owner = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'; 

        getAccount();

        if (currentAccount === owner) {
            return (
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h3>Follow below steps:</h3>
                    <ul>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/register")}>Register Stakeholders</a></li>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/ordermed")}>Order Medicine</a></li>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/supply")}>Control Supply Chain</a></li>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/track")}>Track Medicine</a></li>
                    </ul>
                </div>
            )
        }
        else if ((currentAccount === "0xf2a4691cea64f808bc0bdc8cc88b2d4d5ee258b8") || (currentAccount === "0x0aba4444687ee0c530e265924eaebdcef0c405a9")) {
            return (
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h3>Follow below steps:</h3>
                    <ul>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/supply")}>Control Supply Chain</a></li>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/track")}>Track Medicine</a></li>
                    </ul>
                </div>
            )
        }
        else if ((currentAccount === "0xb7a02bda554af52f0f5512b3189a31a06C9ebabd") || (currentAccount === "0x53b72af02ac3dc780024693a3693e316576df142")) {
            return (
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h3>Follow below steps:</h3>
                    <ul>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/supply")}>Control Supply Chain</a></li>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/track")}>Track Medicine</a></li>
                    </ul>
                </div>
            )
        }
        else if ((currentAccount === "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc") || (currentAccount === "0x75835472f72697cf8659a2b904dce34b278746fc")) {
            return (
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h3>Follow below steps:</h3>
                    <ul>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/supply")}>Control Supply Chain</a></li>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/track")}>Track Medicine</a></li>
                    </ul>
                </div>
            )
        }
        else if ((currentAccount === "0x90F79bf6EB2c4f870365E785982E1f101E93b906") || (currentAccount === "0x0a8e0d609fe728b423a2fe49aa629b1142c9b5c4")) {
            return (
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h3>Follow below steps:</h3>
                    <ul>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/supply")}>Control Supply Chain</a></li>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/track")}>Track Medicine</a></li>
                    </ul>
                </div>
            )
        }
        else {
            console.log("Im else");
            return (
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h3>Follow below steps:</h3>
                    <ul>
                        <li><a id="ConnectButton" className="getstarted scrollto" onClick={() => nav("/track")}>Track Medicine</a></li>
                    </ul>
                </div>
            )
        }
    };

    return (
        <div>
            <Navbar_Comp />
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        {Display()}
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

export default Step_Comp;