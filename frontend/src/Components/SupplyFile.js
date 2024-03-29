import React, { useState, useEffect } from 'react';
import Web3_MS from 'web3/dist/web3.min.js'
import { address, abi } from "./constants/index";
import { Navbar_Comp } from './NavFile';

const Supply_Comp = () => {
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])

    const [currentaccount, setCurrentaccount] = useState("");
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [MED, setMED] = useState();
    const [MedStage, setMedStage] = useState();
    const [ID, setID] = useState();


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

    const handlerChangeID = (event) => {
        setID(event.target.value);
    }
    const handlerSubmitRMSsupply = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.RMSsupply(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }
    const handlerSubmitManufacturing = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.Manufacturing(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }
    const handlerSubmitDistribute = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.Distribute(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }
    const handlerSubmitRetail = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.Retail(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }
    const handlerSubmitSold = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.sold(ID).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }
    const CheckStakeHolder = () => {
        if ((currentaccount == "0xF2a4691ceA64f808Bc0BDC8cC88b2D4D5EE258b8") || (currentaccount == "0x0ABA4444687EE0C530e265924eAEbdCef0c405a9")) {
            return (
                <div>
                    <h5><b>Step 1: Enter the ID of received Medicine</b></h5>
                    <form onSubmit={handlerSubmitRMSsupply}>
                        <input className="form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Medicine ID" required />
                        <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitRMSsupply}>Supply</button>
                    </form>
                    <hr />
                    <br />
                </div>
            )
        }
        else if ((currentaccount == "0xb7a02bDa554Af52F0f5512B3189A31a06C9EBabD") || (currentaccount == "0x53b72Af02AC3DC780024693a3693E316576DF142")) {
            return (
                <div style={{ margin: "auto auto" }}>
                    <h5><b>Step 2: Enter the ID of received Medicine</b></h5>

                    <form onSubmit={handlerSubmitManufacturing}>
                        <input className="form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Medicine ID" required />
                        <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitManufacturing}>Manufacture</button>
                    </form>
                </div>
            )
        }
        else if ((currentaccount == "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc") || (currentaccount == "0x75835472F72697Cf8659A2B904dCe34b278746fc")) {
            return (
                <div>
                    <h5><b>Step 3: Enter the ID of received Medicine</b></h5>
                    <form onSubmit={handlerSubmitDistribute}>
                        <input className="form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Medicine ID" required />
                        <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitDistribute}>Distribute</button>
                    </form>
                    <hr />
                    <br />
                </div>
            )
        }
        else if ((currentaccount == "0x90F79bf6EB2c4f870365E785982E1f101E93b906") || (currentaccount == "0x0a8E0D609Fe728B423A2fE49AA629B1142c9b5c4")) {
            return (
                <div>
                    <h5><b>Step 4: Enter the ID of received Medicine</b></h5>
                    <form onSubmit={handlerSubmitRetail}>
                        <input className="form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Medicine ID" required />
                        <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitRetail}>Retail</button>
                    </form>
                    <hr />
                    <br />
                    <h5><b>Step 5: Enter the ID of sold Medicine</b></h5>
                    <form onSubmit={handlerSubmitSold}>
                        <input className="form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Medicine ID" required />
                        <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitSold}>Sold</button>
                    </form>
                    <hr />
                </div>
            )
        }
        else {
            window.alert("You are not registered as a stake holder.")

        }
    }

    return (
        <div className="hero">
            <Navbar_Comp />
            <section id="hero" className="hero d-flex align-items-center row" style={{ alignContent: "center" }} >
                <h6><b>Supply Chain Flow:</b></h6>
                <p>Medicine Order -&gt; Raw Material Supplier -&gt; Manufacturer -&gt; Distributor -&gt; Retailer -&gt; Consumer</p>
                <table className="table table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Medicine ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Current Processing Stage</th>
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
                <hr />
                <br />
                {CheckStakeHolder()}
                {/* <button onClick={CheckStakeHolder}>Slap me</button> */}
            </section>
        </div>

    );
}

export default Supply_Comp;