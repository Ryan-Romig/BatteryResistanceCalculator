import logo from '../src/headerLogo.png';
import smallLogo from '../src/smallHeaderLogo.png';
import { useState } from 'react';
import './App.css';
import BatteryResistanceCalculator from './components/batteryResistanceCalculator'
import HowToPage from './components/howTo';
import {Card, Button} from '@material-ui/core/';

function App() {


  
  const [content, setContent]=useState(<BatteryResistanceCalculator />);  

  return (
    <div className="App">
      <header className = "navbar">  
      <button onClick={()=>setContent(<BatteryResistanceCalculator/>)}>Calculator</button>
      <img className='logo1' src={logo} alt="logo"/>
      <img className='logo2' src={smallLogo} alt="logo2"/>
      <button onClick={()=>setContent(<HowToPage/>)}>Help</button>
        </header>
      <div className='contentContainer' id='content'>
        {content}        
      </div>
      </div>
  );
}

export default App;
