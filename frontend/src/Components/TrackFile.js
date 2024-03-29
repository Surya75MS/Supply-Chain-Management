import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3_MS from 'web3/dist/web3.min.js'
import { address, abi } from "./constants/index";
import { Navbar_Comp } from './NavFile';

const Track_Comp = () => {
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])

    const nav = useNavigate();
    const [currentaccount, setCurrentaccount] = useState("");
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [MED, setMED] = useState();
    const [MedStage, setMedStage] = useState();
    const [ID, setID] = useState();
    const [RMS, setRMS] = useState();
    const [MAN, setMAN] = useState();
    const [DIS, setDIS] = useState();
    const [RET, setRET] = useState();
    const [TrackTillSold, setTrackTillSold] = useState(false);
    const [TrackTillRetail, setTrackTillRetail] = useState(false);
    const [TrackTillDistribution, setTrackTillDistribution] = useState(false);
    const [TrackTillManufacture, setTrackTillManufacture] = useState(false);
    const [TrackTillRMS, setTrackTillRMS] = useState(false);
    const [TrackTillOrdered, setTrackTillOrdered] = useState(false);

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
            med[i + 1] = await supplychain.methods.MedicineStock(i + 1).call();
            medStage[i + 1] = await supplychain.methods.showStage(i + 1).call();
        }
        setMED(med);
        setMedStage(medStage);
        const rmsCtr = await supplychain.methods.rmsCtr().call();
        const rms = {};
        for (i = 0; i < rmsCtr; i++) {
            rms[i + 1] = await supplychain.methods.RMS(i + 1).call();
        }
        setRMS(rms);
        const manCtr = await supplychain.methods.manCtr().call();
        const man = {};
        for (i = 0; i < manCtr; i++) {
            man[i + 1] = await supplychain.methods.MAN(i + 1).call();
        }
        setMAN(man);
        const disCtr = await supplychain.methods.disCtr().call();
        const dis = {};
        for (i = 0; i < disCtr; i++) {
            dis[i + 1] = await supplychain.methods.DIS(i + 1).call();
        }
        setDIS(dis);
        const retCtr = await supplychain.methods.retCtr().call();
        const ret = {};
        for (i = 0; i < retCtr; i++) {
            ret[i + 1] = await supplychain.methods.RET(i + 1).call();
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

    if (TrackTillSold) {
        return (
            <div className="hero">
                <Navbar_Comp />
                <div>
                    <a href="http://172.20.10.1" target="_blank"><h4>Track Location: </h4></a>
                </div>
                <div className="container-xl">
                    <article className="col-4">
                        <h3><b><u>Medicine:</u></b></h3>
                        <span><b>Medicine ID: </b>{MED[ID].id}</span>
                        <br />
                        <span><b>Name:</b> {MED[ID].name}</span>
                        <br />
                        <span><b>Description: </b>{MED[ID].description}</span>
                        <br />
                        <span><b>Current stage: </b>{MedStage[ID]}</span>
                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col-3">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <p><b>Supplier ID: </b>{RMS[MED[ID].RMSid].id}</p>
                            <p><b>Name:</b> {RMS[MED[ID].RMSid].name}</p>
                            <p><b>Place: </b>{RMS[MED[ID].RMSid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Manufactured by:</u></h4>
                            <p><b>Manufacturer ID: </b>{MAN[MED[ID].MANid].id}</p>
                            <p><b>Name:</b> {MAN[MED[ID].MANid].name}</p>
                            <p><b>Place: </b>{MAN[MED[ID].MANid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Distributed by:</u></h4>
                            <p><b>Distributor ID: </b>{DIS[MED[ID].DISid].id}</p>
                            <p><b>Name:</b> {DIS[MED[ID].DISid].name}</p>
                            <p><b>Place: </b>{DIS[MED[ID].DISid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Retailed by:</u></h4>
                            <p><b>Retailer ID: </b>{RET[MED[ID].RETid].id}</p>
                            <p><b>Name:</b> {RET[MED[ID].RETid].name}</p>
                            <p><b>Place: </b>{RET[MED[ID].RETid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Sold</u></h4>
                        </article>
                    </section>
                    <button onClick={() => {
                        setTrackTillSold(false);
                    }} className="btn btn-outline-success btn-sm">Track Another Item</button>
                </div >
            </div>
        )
    }
    if (TrackTillRetail) {
        return (
            <div className="hero">
                <Navbar_Comp />
                <div className="hero container-xl">
                    <article className="col-4">
                        <h3><b><u>Medicine:</u></b></h3>
                        <span><b>Medicine ID: </b>{MED[ID].id}</span>
                        <br />
                        <span><b>Name:</b> {MED[ID].name}</span>
                        <br />
                        <span><b>Description: </b>{MED[ID].description}</span>
                        <br />
                        <span><b>Current stage: </b>{MedStage[ID]}</span>
                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col-3">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <p><b>Supplier ID: </b>{RMS[MED[ID].RMSid].id}</p>
                            <p><b>Name:</b> {RMS[MED[ID].RMSid].name}</p>
                            <p><b>Place: </b>{RMS[MED[ID].RMSid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Manufactured by:</u></h4>
                            <p><b>Manufacturer ID: </b>{MAN[MED[ID].MANid].id}</p>
                            <p><b>Name:</b> {MAN[MED[ID].MANid].name}</p>
                            <p><b>Place: </b>{MAN[MED[ID].MANid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Distributed by:</u></h4>
                            <p><b>Distributor ID: </b>{DIS[MED[ID].DISid].id}</p>
                            <p><b>Name:</b> {DIS[MED[ID].DISid].name}</p>
                            <p><b>Place: </b>{DIS[MED[ID].DISid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Retailed by:</u></h4>
                            <p><b>Retailer ID: </b>{RET[MED[ID].RETid].id}</p>
                            <p><b>Name:</b> {RET[MED[ID].RETid].name}</p>
                            <p><b>Place: </b>{RET[MED[ID].RETid].place}</p>
                        </article>
                    </section>
                    <button onClick={() => {
                        setTrackTillRetail(false);
                    }} className="btn btn-outline-success btn-sm">Track Another Item</button>
                </div >
            </div>
        )
    }
    if (TrackTillDistribution) {
        return (
            <div className="hero">
                <Navbar_Comp />
                <div className="container-xl">
                    <article className="col-4">
                        <h3><b><u>Medicine:</u></b></h3>
                        <span><b>Medicine ID: </b>{MED[ID].id}</span>
                        <br />
                        <span><b>Name:</b> {MED[ID].name}</span>
                        <br />
                        <span><b>Description: </b>{MED[ID].description}</span>
                        <br />
                        <span><b>Current stage: </b>{MedStage[ID]}</span>
                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col-3">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <p><b>Supplier ID: </b>{RMS[MED[ID].RMSid].id}</p>
                            <p><b>Name:</b> {RMS[MED[ID].RMSid].name}</p>
                            <p><b>Place: </b>{RMS[MED[ID].RMSid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Manufactured by:</u></h4>
                            <p><b>Manufacturer ID: </b>{MAN[MED[ID].MANid].id}</p>
                            <p><b>Name:</b> {MAN[MED[ID].MANid].name}</p>
                            <p><b>Place: </b>{MAN[MED[ID].MANid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Distributed by:</u></h4>
                            <p><b>Distributor ID: </b>{DIS[MED[ID].DISid].id}</p>
                            <p><b>Name:</b> {DIS[MED[ID].DISid].name}</p>
                            <p><b>Place: </b>{DIS[MED[ID].DISid].place}</p>
                        </article>
                    </section>
                    <button onClick={() => {
                        setTrackTillDistribution(false);
                    }} className="btn btn-outline-success btn-sm">Track Another Item</button>
                </div>
            </div >
        )
    }
    if (TrackTillManufacture) {
        return (
            <div className="hero">
                <Navbar_Comp />
                <div className="container-xl">
                    <article className="col-4">
                        <h3><b><u>Medicine:</u></b></h3>
                        <span><b>Medicine ID: </b>{MED[ID].id}</span>
                        <br />
                        <span><b>Name:</b> {MED[ID].name}</span>
                        <br />
                        <span><b>Description: </b>{MED[ID].description}</span>
                        <br />
                        <span><b>Current stage: </b>{MedStage[ID]}</span>
                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col-3">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <p><b>Supplier ID: </b>{RMS[MED[ID].RMSid].id}</p>
                            <p><b>Name:</b> {RMS[MED[ID].RMSid].name}</p>
                            <p><b>Place: </b>{RMS[MED[ID].RMSid].place}</p>
                        </article>
                        <span>&#10132;</span>
                        <article className="col-3">
                            <h4><u>Manufactured by:</u></h4>
                            <p><b>Manufacturer ID: </b>{MAN[MED[ID].MANid].id}</p>
                            <p><b>Name:</b> {MAN[MED[ID].MANid].name}</p>
                            <p><b>Place: </b>{MAN[MED[ID].MANid].place}</p>
                        </article>
                    </section>
                    <button onClick={() => {
                        setTrackTillManufacture(false);
                    }} className="btn btn-outline-success btn-sm">Track Another Item</button>
                </div>
            </div >
        )
    }
    if (TrackTillRMS) {
        return (
            <div className="hero">
                <Navbar_Comp />
                <div className="container-xl">
                    <article className="col-4">
                        <h3><b><u>Medicine:</u></b></h3>
                        <span><b>Medicine ID: </b>{MED[ID].id}</span>
                        <br />
                        <span><b>Name:</b> {MED[ID].name}</span>
                        <br />
                        <span><b>Description: </b>{MED[ID].description}</span>
                        <br />
                        <span><b>Current stage: </b>{MedStage[ID]}</span>
                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col-3">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <p><b>Supplier ID: </b>{RMS[MED[ID].RMSid].id}</p>
                            <p><b>Name:</b> {RMS[MED[ID].RMSid].name}</p>
                            <p><b>Place: </b>{RMS[MED[ID].RMSid].place}</p>
                        </article>
                    </section>
                    <button onClick={() => {
                        setTrackTillRMS(false);
                    }} className="btn btn-outline-success btn-sm">Track Another Item</button>
                </div>
            </div >
        )
    }
    if (TrackTillOrdered) {
        return (
            <div className="hero">
                <Navbar_Comp />
                <div className=" container-xl">
                    <article className="col-4">
                        <h3><b><u>Medicine:</u></b></h3>
                        <span><b>Medicine ID: </b>{MED[ID].id}</span>
                        <br />
                        <span><b>Name:</b> {MED[ID].name}</span>
                        <br />
                        <span><b>Description: </b>{MED[ID].description}</span>
                        <br />
                        <span><b>Current stage: </b>{MedStage[ID]}</span>
                        <hr />
                        <br />
                        <h5>Medicine Not Yet Processed...</h5>
                        <button onClick={() => {
                            setTrackTillOrdered(false);
                        }} className="btn btn-outline-success btn-sm">Track Another Item</button>
                        <span onClick={() => {
                            nav('/')
                        }} className="btn btn-outline-danger btn-sm"> HOME</span>
                    </article>
                    {/* <section className="row">
                    
                    <article className="col-3">
                        <h4><u>Raw Materials Supplied by:</u></h4>
                        <p><b>Supplier ID: </b>{RMS[MED[ID].RMSid].id}</p>
                        <p><b>Name:</b> {RMS[MED[ID].RMSid].name}</p>
                        <p><b>Place: </b>{RMS[MED[ID].RMSid].place}</p>
                    </article>
                </section> */}
                </div >
            </div>
        )
    }
    const handlerChangeID = (event) => {
        setID(event.target.value);
    }
    const redirect_to_home = () => {
        nav('/')
    }
    const handlerSubmit = async (event) => {
        event.preventDefault();
        var ctr = await SupplyChain.methods.medicineCtr().call();
        if (!((ID > 0) && (ID <= ctr)))
            alert("Invalid Medicine ID!!!");
        else {
            // eslint-disable-next-line
            if (MED[ID].stage == 5)
                setTrackTillSold(true);
            // eslint-disable-next-line
            else if (MED[ID].stage == 4)
                setTrackTillRetail(true);
            // eslint-disable-next-line
            else if (MED[ID].stage == 3)
                setTrackTillDistribution(true);
            // eslint-disable-next-line
            else if (MED[ID].stage == 2)
                setTrackTillManufacture(true);
            // eslint-disable-next-line
            else if (MED[ID].stage == 1)
                setTrackTillRMS(true);
            else
                setTrackTillOrdered(true);
        }
    }

    return (
        <div className="hero">
            <Navbar_Comp />
            <section id="hero" className="hero d-flex align-items-center row" style={{ alignContent: "center" }}>
                <div style={{ margin: "auto auto", marginLeft: "42%", marginBottom: "3%" }}>
                    <h5>Enter Medicine ID to Track it</h5>

                    <form onSubmit={handlerSubmit}>
                        <input className="form-control-sm" type="text" onChange={handlerChangeID} placeholder="Enter Medicine ID" required />
                        <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmit}>Track</button>
                    </form>
                </div>
                <table className="table table-sm table-bordered">
                    <thead>
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
                                    <td>
                                        {
                                            MedStage[key]
                                        }
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

export default Track_Comp;