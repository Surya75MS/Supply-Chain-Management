import React, { useState, useEffect } from 'react';
import Web3_MS from 'web3/dist/web3.min.js'
import { useNavigate } from "react-router-dom"
// import { address, abi } from "./constants/index";
import ABI from "../artifacts/SupplyChain.json"

const Register_Comp = () => {
    const [currentaccount, setCurrentaccount] = useState("");
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [RMSname, setRMSname] = useState();
    const [MANname, setMANname] = useState();
    const [DISname, setDISname] = useState();
    const [RETname, setRETname] = useState();
    const [RMSplace, setRMSplace] = useState();
    const [MANplace, setMANplace] = useState();
    const [DISplace, setDISplace] = useState();
    const [RETplace, setRETplace] = useState();
    const [RMSaddress, setRMSaddress] = useState();
    const [MANaddress, setMANaddress] = useState();
    const [DISaddress, setDISaddress] = useState();
    const [RETaddress, setRETaddress] = useState();
    const [RMS, setRMS] = useState();
    const [MAN, setMAN] = useState();
    const [DIS, setDIS] = useState();
    const [RET, setRET] = useState();

    const nav = useNavigate()
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
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

    const loadBlockchaindata = async () => {
        setloader(true);
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        // console.log(account);
        setCurrentaccount(account);
        const networkId = await web3.eth.net.getId();
        // console.log(networkId);
        const networkData = ABI.networks[networkId];
        // console.log(networkData);
        // console.log("Hello", networkData.address);
        if (networkData) {
            console.log("Im true");
            const supplychain = new web3.eth.Contract(ABI.abi, networkData.address);
            console.log("Im true");
        //     setSupplyChain(supplychain);
        //     var i;
        //     const rmsCtr = await supplychain.methods.rmsCtr().call();
        //     const rms = {};
        //     for (i = 0; i < rmsCtr; i++) {
        //         rms[i] = await supplychain.methods.RMS(i + 1).call();
        //     }
        //     setRMS(rms);
        //     const manCtr = await supplychain.methods.manCtr().call();
        //     const man = {};
        //     for (i = 0; i < manCtr; i++) {
        //         man[i] = await supplychain.methods.MAN(i + 1).call();
        //     }
        //     setMAN(man);
        //     const disCtr = await supplychain.methods.disCtr().call();
        //     const dis = {};
        //     for (i = 0; i < disCtr; i++) {
        //         dis[i] = await supplychain.methods.DIS(i + 1).call();
        //     }
        //     setDIS(dis);
        //     const retCtr = await supplychain.methods.retCtr().call();
        //     const ret = {};
        //     for (i = 0; i < retCtr; i++) {
        //         ret[i] = await supplychain.methods.RET(i + 1).call();
        //     }
        //     setRET(ret);
        //     setloader(false);
        }
        // else {
        //     window.alert('The smart contract is not deployed to current network')
        // }
    }

    return (
        <div>

        </div>
    );
}

export default Register_Comp;