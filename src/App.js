import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);


  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>{
      setCountries(data);
      console.log(data); 
      const names = data.map(country => country.name)
      console.log(names);   
    }) 
  }, []) 
 

  return (
    <div className="App">
  <h1>countries loaded: {countries.length}</h1> 
  <ul>
   
      {
        countries.map(country => <Country name={country.name}></Country>)   
      } 
  </ul>
    
    </div> 
  );
}

export default App;
