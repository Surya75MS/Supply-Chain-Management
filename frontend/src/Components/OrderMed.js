import React, { useState, useEffect } from 'react';
import Web3_MS from 'web3/dist/web3.min.js'
import { address, abi } from "./constants/index";
import { Navbar_Comp } from './NavFile';

const OrderMed_Comp = () => {
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])

    const [currentaccount, setCurrentaccount] = useState("");
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [MED, setMED] = useState();
    const [MedName, setMedName] = useState();
    const [MedDes, setMedDes] = useState();
    const [MedStage, setMedStage] = useState();


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
        setCurrentaccount(account);

        const supplychain = new web3.eth.Contract(abi, address);
        setSupplyChain(supplychain);
        var i;
        const medCtr = await supplychain.methods.medicineCtr().call();
        const med = {};
        const medStage = [];
        for (i = 0; i < medCtr; i++) {
            med[i] = await supplychain.methods.MedicineStock(i + 1).call();
            medStage[i] = await supplychain.methods.showStage(i + 1).call();
        }
        setMED(med);
        setMedStage(medStage);
        setloader(false);

    }
    if (loader) {
        return (
            <div>
                <h1 className="wait">Loading...</h1>
            </div>
        )

    }
    const handlerChangeNameMED = (event) => {
        setMedName(event.target.value);
    }
    const handlerChangeDesMED = (event) => {
        setMedDes(event.target.value);
    }
    const handlerSubmitMED = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.addMedicine(MedName, MedDes).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }
    return (
        <div className="hero">
            <Navbar_Comp />
            <section id="hero" className="hero d-flex align-items-center row" style={{ alignContent: "center" }}>
                <div style={{ marginLeft: "31%", padding: "3%" }}>
                    <h5>Order Medicine:</h5>
                    <form onSubmit={handlerSubmitMED} >
                        <input className="form-control-sm" type="text" onChange={handlerChangeNameMED} placeholder="Medicine Name" required />
                        <input className="form-control-sm" type="text" onChange={handlerChangeDesMED} placeholder="Medicine Description" required />
                        <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitMED}>Order</button>
                    </form>
                </div>
                <br />
                <h5>Ordered Medicines:</h5>
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Current Stage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(MED).map(function (key) {
                            return (
                                <tr key={key}>
                                    <td>{MED[key].id}</td>
                                    <td>{MED[key].name}</td>
                                    <td>{MED[key].description}</td>
                                    <td><b>
                                        {
                                            MedStage[key]
                                        }</b>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default OrderMed_Comp;