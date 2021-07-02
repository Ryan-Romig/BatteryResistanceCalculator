import logo from '../src/headerLogo.png';
import smallLogo from '../src/smallHeaderLogo.png';
import { useState } from 'react';
import './App.css';
import BatteryResistanceCalculator from './components/batteryResistanceCalculator'
import {Card, Button} from '@material-ui/core/';

function App() {

   const [content, setContent]=useState(<BatteryResistanceCalculator />);

  return (
    <div className="App">
      <header className = "navbar">       
      <img className='logo1' src={logo} alt="logo"/>
      <img className='logo2' src={smallLogo} alt="logo2"/>
        </header>
      <div className='contentContainer' id='content'>
        {content}        
          </div>

    </div>
  );
}

export default App;
