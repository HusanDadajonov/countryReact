import "./CountryItemStyle.css";

export default function ({arr}){
    return (
        arr.map(item => (
            <li className="boxs">
                <div className="flugs-box">
                    <img className="flugs" src={item.img} alt="germany-flug-img" width="264px" height="160x"></img>
                        <div className="flugs-text">
                            <h2 className="country-name">{item.countryName}</h2>
                            <p className="population"><span>Population:</span>{item.population}</p>
                            <p className="region"><span>Region:</span>{item.region}</p>
                            <p className="capital"><span>Capital:</span>{item.Capital}</p>
                        </div>
                </div>
            </li>
        ))
    )
}