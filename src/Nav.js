import { useState } from "react";
import "./NavStyle.css";

export default function ({getInpValue}){
    const [inpValue,SetIitem] = useState("");

    function SetValue(val){
        getInpValue(val);
    }

    function Search(e){
        e.preventDefault()
    }

    return (
        <div className="nav-box">
            <div className="input-box row align-center">
                <i className="bx bx-search"></i>
                <form onSubmit={Search}>
                    <label htmlFor="country"><input className="search-input" type="text" id="country" placeholder="Search for a country…" onClick={(e)=> SetIitem(e.target)} onChange={(e)=> SetValue(e.target.value)} autoComplete="off" /></label>
                </form>
            </div>
        </div>
    )
} 