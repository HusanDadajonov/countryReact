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
                    <label htmlFor="country"><input className="search-input" type="text" id="country" placeholder="Search for a country…" onClick={(e)=> SetIitem(e.target)} onChange={(e)=> SetValue(e.target.value)}  /></label>
                </form>
            </div>
            <div className="select-btn align-center between">
                <i className="bx bx-chevron-down"></i>
                <select name="select-coutries">
                    <option  disabled defaultValue hidden>Filter by Region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe </option>
                    <option>Oceania</option>
                </select>
            </div>
        </div>
    )
} 