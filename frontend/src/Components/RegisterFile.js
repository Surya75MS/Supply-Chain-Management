import React, { useState, useEffect } from 'react';
import Web3_MS from 'web3/dist/web3.min.js'
import { address, abi } from "./constants/index";
import { Navbar_Comp } from './NavFile';

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
        setCurrentaccount(account);

        // const networkId = await web3.eth.net.getId();
        // const networkData = ABI.networks[networkId];
        // console.log("Before")
        const supplychain = new web3.eth.Contract(abi, address);
        setSupplyChain(supplychain);
        // console.log("After")

        var i;

        const rmsCtr = await supplychain.methods.rmsCtr().call();
        // console.log("rmsCtr", rmsCtr);
        const rms = {};
        for (i = 0; i < rmsCtr; i++) {
            rms[i] = await supplychain.methods.RMS(i + 1).call();
        }
        setRMS(rms);

        const manCtr = await supplychain.methods.manCtr().call();
        // console.log("manCtr", manCtr);
        const man = {};
        for (i = 0; i < manCtr; i++) {
            man[i] = await supplychain.methods.MAN(i + 1).call();
        }
        setMAN(man);

        const disCtr = await supplychain.methods.disCtr().call();
        // console.log("disCtr", disCtr);
        const dis = {};
        for (i = 0; i < disCtr; i++) {
            dis[i] = await supplychain.methods.DIS(i + 1).call();
        }
        setDIS(dis);

        const retCtr = await supplychain.methods.retCtr().call();
        // console.log("retCtr", retCtr);
        const ret = {};
        for (i = 0; i < retCtr; i++) {
            ret[i] = await supplychain.methods.RET(i + 1).call();
        }
        setRET(ret);

        setloader(false);
    }

    if (loader) {
        return (
            <div>
                <h1 className="wait">Loading...</h1>
            </div>
        )

    }

    const handlerChangeAddressRMS = (event) => {
        setRMSaddress(event.target.value);
    }
    const handlerChangePlaceRMS = (event) => {
        setRMSplace(event.target.value);
    }
    const handlerChangeNameRMS = (event) => {
        setRMSname(event.target.value);
    }
    const handlerSubmitRMS = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.addRMS(RMSaddress, RMSname, RMSplace).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }



    const handlerChangeAddressMAN = (event) => {
        setMANaddress(event.target.value);
    }
    const handlerChangePlaceMAN = (event) => {
        setMANplace(event.target.value);
    }
    const handlerChangeNameMAN = (event) => {
        setMANname(event.target.value);
    }
    const handlerSubmitMAN = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.addManufacturer(MANaddress, MANname, MANplace).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }


    const handlerChangeAddressDIS = (event) => {
        setDISaddress(event.target.value);
    }
    const handlerChangePlaceDIS = (event) => {
        setDISplace(event.target.value);
    }
    const handlerChangeNameDIS = (event) => {
        setDISname(event.target.value);
    }
    const handlerSubmitDIS = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.addDistributor(DISaddress, DISname, DISplace).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }


    const handlerChangeAddressRET = (event) => {
        setRETaddress(event.target.value);
    }
    const handlerChangePlaceRET = (event) => {
        setRETplace(event.target.value);
    }
    const handlerChangeNameRET = (event) => {
        setRETname(event.target.value);
    }
    const handlerSubmitRET = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.addRetailer(RETaddress, RETname, RETplace).send({ from: currentaccount });
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
            <section id="hero" className="hero d-flex align-items-center row" >
                <h4>Raw Material Suppliers: </h4>
                <form onSubmit={handlerSubmitRMS}>
                    <input className="form-control-sm" type="text" onChange={handlerChangeAddressRMS} placeholder="Ethereum Address" required />
                    <input className="form-control-sm" type="text" onChange={handlerChangeNameRMS} placeholder="Raw Material Supplier Name" required />
                    <input className="form-control-sm" type="text" onChange={handlerChangePlaceRMS} placeholder="Based In" required />
                    <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitRMS}>Register</button>
                </form>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Place</th>
                            <th scope="col">Ethereum Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(RMS).map(function (key) {
                            // console.log(key)
                            return (
                                <tr key={key}>
                                    <td>{RMS[key].id}</td>
                                    <td>{RMS[key].name}</td>
                                    <td>{RMS[key].place}</td>
                                    <td>{RMS[key].addr}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <h4>Manufacturers: </h4>
                <form onSubmit={handlerSubmitMAN}>
                    <input className="form-control-sm" type="text" onChange={handlerChangeAddressMAN} placeholder="Ethereum Address" required />
                    <input className="form-control-sm" type="text" onChange={handlerChangeNameMAN} placeholder="Manufacturer Name" required />
                    <input className="form-control-sm" type="text" onChange={handlerChangePlaceMAN} placeholder="Based In" required />
                    <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitMAN}>Register</button>
                </form>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Place</th>
                            <th scope="col">Ethereum Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(MAN).map(function (key) {
                            return (
                                <tr key={key}>
                                    <td>{MAN[key].id}</td>
                                    <td>{MAN[key].name}</td>
                                    <td>{MAN[key].place}</td>
                                    <td>{MAN[key].addr}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <h4>Distributors: </h4>
                <form onSubmit={handlerSubmitDIS}>
                    <input className="form-control-sm" type="text" onChange={handlerChangeAddressDIS} placeholder="Ethereum Address" required />
                    <input className="form-control-sm" type="text" onChange={handlerChangeNameDIS} placeholder="Distributor Name" required />
                    <input className="form-control-sm" type="text" onChange={handlerChangePlaceDIS} placeholder="Based In" required />
                    <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitDIS}>Register</button>
                </form>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Place</th>
                            <th scope="col">Ethereum Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(DIS).map(function (key) {
                            return (
                                <tr key={key}>
                                    <td>{DIS[key].id}</td>
                                    <td>{DIS[key].name}</td>
                                    <td>{DIS[key].place}</td>
                                    <td>{DIS[key].addr}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <h4>Retailers: </h4>
                <form onSubmit={handlerSubmitRET}>
                    <input className="form-control-sm" type="text" onChange={handlerChangeAddressRET} placeholder="Ethereum Address" required />
                    <input className="form-control-sm" type="text" onChange={handlerChangeNameRET} placeholder="Retailer Name" required />
                    <input className="form-control-sm" type="text" onChange={handlerChangePlaceRET} placeholder="Based In" required />
                    <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitRET}>Register</button>
                </form>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Place</th>
                            <th scope="col">Ethereum Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(RET).map(function (key) {
                            return (
                                <tr key={key}>
                                    <td>{RET[key].id}</td>
                                    <td>{RET[key].name}</td>
                                    <td>{RET[key].place}</td>
                                    <td>{RET[key].addr}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div>Currentaccount: </div>
                <div>SupplyChain: { }</div>
                <div>setloader: {loader.toString()}</div>
                <div>RMS Address: {RMSaddress}</div>
                <div>RMS name: {RMSname}</div>
                <div>RMS place: {RMSplace}</div>
                <div>RMS: { }</div>
                <div>MAN: { }</div>
                <div>DIS: { }</div>
                <div>RET: { }</div>
            </section>
        </div>
    );
}

export default Register_Comp;