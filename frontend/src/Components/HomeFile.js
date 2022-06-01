import React from 'react'
import { useNavigate } from "react-router-dom"

const Home_Comp = () => {
    const nav = useNavigate();
    return (
        <div>
            <h3>Pharmaceutical Supply Chain Flow :- </h3>
            <br />
            <h6>(Note: Here <u>Owner</u> is the person who deployed the smart contract on the blockchain)</h6>
            <h5>Step 1: Owner Should Register Raw material suppliers ,Manufacturers, Distributors and Retailers</h5>
            <h6>(Note: This is a one time step. Skip to step 2 if already done)</h6>
            <button onClick={() => nav('/register')} className="btn btn-outline-primary btn-sm">Register</button>
            <br />
            <h5>Step 2: Owner should order medicines</h5>
            <button onClick={() => nav('/addmed')} className="btn btn-outline-primary btn-sm">Order Medicines</button>
            <br />
            <h5>Step 3: Control Supply Chain</h5>
            <button onClick={() => nav('/supply')} className="btn btn-outline-primary btn-sm">Control Supply Chain</button>
            <br />
            <hr />
            <br />
            <h5><b>Track</b> the medicines:</h5>
            <button onClick={() => nav('/track')} className="btn btn-outline-primary btn-sm">Track Medicines</button>
        </div>
    );
}

export default Home_Comp;