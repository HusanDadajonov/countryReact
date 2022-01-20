import { useState } from "react";
import Items from "./CountryItem";
import Nav from "./Nav";

function App() {
    const [CureentInpValue,CureentSetValue] = useState("");
    function getInpValue(val){
        CureentSetValue(val)
    }
    console.log();
    
  return (
    <div className="container">
        <Nav getInpValue = {getInpValue} />
        <ul className="country-list">
            <Items CureentInpValue = {CureentInpValue} />            
        </ul>
    </div>
  );
}

export default App;
