import Items from "./CountryItem";
import Nav from "./Nav";
let sum = 1;

function App() {
    
  const CountryArr = [
    {
        img : "https://raw.githubusercontent.com/am1rcek/countries/ca82aa76dc924d092ac4ab6b387f223c3e8e8381/img/afganistan.svg",
        countryName : "Afghanistan",
        population : "81,770,900",
        region : "Europe",
        Capital : "Berlin",
        id: 1,
    },
    {
        img : "https://raw.githubusercontent.com/am1rcek/countries/ca82aa76dc924d092ac4ab6b387f223c3e8e8381/img/germany.svg",
        countryName : "Germany",
        population : "27,657,145",
        region : "Asia",
        Capital : "Kabul",
        id: 2,
    },
    {
        img : "https://raw.githubusercontent.com/am1rcek/countries/ca82aa76dc924d092ac4ab6b387f223c3e8e8381/img/america.svg",
        countryName : "America",
        population : "28,875",
        region : "Europe",
        Capital : "Mariehamn",
        id: 3,
    },
    {
        img : "https://raw.githubusercontent.com/am1rcek/countries/ca82aa76dc924d092ac4ab6b387f223c3e8e8381/img/brazil.svg",
        countryName : "Brazil",
        population : "2,886,026",
        region : "Europe",
        Capital : "Tirana",
        id: 4,
    },
    {
        img : "https://raw.githubusercontent.com/am1rcek/countries/ca82aa76dc924d092ac4ab6b387f223c3e8e8381/img/icelan.svg",
        countryName : "Iceland",
        population : "40,400,000",
        region : "Africa",
        Capital : "Algiers",
        id: 5,
    },
    {
        img : "https://raw.githubusercontent.com/am1rcek/countries/ca82aa76dc924d092ac4ab6b387f223c3e8e8381/img/island.svg",
        countryName : "Islands",
        population : "323,947,000",
        region : "Americas",
        Capital : "Washington",
        id: 6,
    },
    {
        img : "https://raw.githubusercontent.com/am1rcek/countries/ca82aa76dc924d092ac4ab6b387f223c3e8e8381/img/albania.svg",
        countryName : "Albania",
        population : "206,135,893",
        region : "Americas",
        Capital : "Brasília",
        id: 7,
    },
    {
        img : "https://raw.githubusercontent.com/am1rcek/countries/ca82aa76dc924d092ac4ab6b387f223c3e8e8381/img/algeria.svg",
        countryName : "Algeria",
        population : "334,300",
        region : "Europe",
        Capital : "Reykjavík",
        id: 8,
    },
  ]
  return (
    <div className="container">
        <Nav />
        <ul className="country-list"><Items arr = {CountryArr}/></ul>
    </div>
  );
}

export default App;
