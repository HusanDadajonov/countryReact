import "./CountryItemStyle.css";
import CountryArr from "./CountryArr";
import { useState } from "react";

export default function ({CureentInpValue}){
    const [arr,SetArr] = useState(CountryArr);
    let filtred;
    if(CureentInpValue != ""){
        filtred = CountryArr.filter(item => item.name.toLowerCase().includes(CureentInpValue));
        return (
            filtred.map(item => (
                <li  className="boxs">
                    <div className="flugs-box">
                        <div className="flugs-text">
                            <div className="img-wrap">
                                <img className="flugs" src={item.flag} alt="germany-flug-img" width="240px" height="160x"></img>    
                            </div>
                            <h2 className="country-name"><mark>{item.name}</mark></h2>
                            <p className="population"><span>Population:</span>{item.population}</p>
                            <p className="region"><span>Region:</span>{item.region}</p>
                            <p className="capital"><span>Capital:</span>{item.capital}</p>
                        </div>
                    </div>
                </li>
            ))
        )
    }

   if(CureentInpValue == ""){
    return (
        arr.map(item => (
            <li  className="boxs">
                <div className="flugs-box">
                    <div className="flugs-text">
                        <div className="img-wrap">
                            <img className="flugs" src={item.flag} alt="germany-flug-img" width="240px" height="160x"></img>    
                        </div>
                        <h2 className="country-name">{item.name}</h2>
                        <p className="population"><span>Population:</span>{item.population}</p>
                        <p className="region"><span>Region:</span>{item.region}</p>
                        <p className="capital"><span>Capital:</span>{item.capital}</p>
                    </div>
                </div>
            </li>
        ))
    )
   }
    
}


