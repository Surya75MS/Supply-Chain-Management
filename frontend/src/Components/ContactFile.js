import { useState } from "react";
import { Navbar_Comp } from "./NavFile";

const Contact_Comp = () => {
    const [fname, setfname] = useState('');
    const [sname, setsname] = useState('');
    const [query, setquery] = useState('');

    const HandleSubmit = (e) => {
        window.alert("Your request is recorded.")
    };

    return (
        <div className="hero">
            <Navbar_Comp />
            <section id="hero" className="hero d-flex align-items-center row" >
                <div className="create">
                    <form>
                        <label>Enter your first name:</label>
                        <input
                            type="text"
                            required
                            value={fname}
                            onChange={(e) => setfname(e.target.value)}
                        />
                        <label>Enter your second name:</label>
                        <textarea
                            type="text"
                            required
                            value={sname}
                            onChange={(e) => setsname(e.target.value)}
                        ></textarea>

                        <label>Enter your query:</label>
                        <textarea
                            type="text"
                            required
                            value={query}
                            onChange={(e) => setquery(e.target.value)}
                        ></textarea>

                        <button onClick={HandleSubmit}>Submit Request</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact_Comp;