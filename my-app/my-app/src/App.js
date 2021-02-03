// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';

import './App.css';

function App() {

  
  const [rates, setLiveRates] = useState([]);
  
  const [error, setError] = useState("");


  useEffect(() => {
    getLiveRates();    
  },[])

  const getLiveRates = async () => {

      const response = await fetch("https://www.live-rates.com/rates", {timeout: 1500});
      const jsonData = await response.json();
      console.log(response.status);
      console.log(jsonData);
      
      setLiveRates(jsonData);     
      
       
  }

  
  return (
    
    rates.map((rate,index) => (
      
      <li key={index}>        
        <strong> Currency: </strong> {rate.currency}
        <strong> Ask: </strong> {rate.ask}
        <strong> Bid: </strong> {rate.bid}
        <strong> Close: </strong>  {rate.close}        
        <strong> High:</strong> {rate.high}
        <strong> Low: </strong> {rate.low}
        <strong> Open: </strong> {rate.open}
        <strong> Rate:</strong>  {rate.rate}
        <strong> Timestamp: </strong> {rate.timestamp}        
      </li>

    ))
      
    );
  }



export default App;
