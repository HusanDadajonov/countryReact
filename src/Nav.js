import "./NavStyle.css";

export default function (){
    return (
        <div className="nav-box">
            <div className="input-box row align-center">
                <i className="bx bx-search"></i>
                <label for="country"><input className="search-input" type="text" id="country" placeholder="Search for a country…" /></label>
            </div>
            <div className="select-btn align-center between">
                <i className="bx bx-chevron-down"></i>
                <select name="select-coutries">
                    <option  disabled selected hidden>Filter by Region</option>
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