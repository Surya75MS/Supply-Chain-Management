import React, { useState, useEffect } from 'react';
import Web3_MS from 'web3/dist/web3.min.js'
// import SupplyChainABI from "./artifacts/SupplyChain.json"
import { useNavigate } from "react-router-dom"

const Register_Comp = () => {
    const nav = useNavigate()
    useEffect(() => {
        loadWeb3();
        // loadBlockchaindata();
    }, [])

    //Below function invokes metamask
    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3_MS(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3_MS(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };

    return (
        <div>

        </div>
    );
}

export default Register_Comp;