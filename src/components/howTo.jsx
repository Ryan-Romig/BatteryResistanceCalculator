import React, { useState } from 'react';
import '../components/howTo.css';
import pressHelp from './Gifs/pressHelp.gif';
import openAndroidSettings from './Gifs/openAndroidSettings.gif';
import aboutEquipment from './Gifs/aboutEquipment.gif';
import developerOn from './Gifs/developerOn.gif';
import openDeveloperOptions from './Gifs/openDeveloperOptions.gif';
import turnOnDebug from './Gifs/turnOnDebug.gif';
import delphinFrame from '../DelphinFrame.png';

function HowToPage(){

const[imageSource, setImageSource] = useState(pressHelp);



 const howToAdb = <div className='mainContainer'>
     
    <div className="contentContainer">     
        <div className='imageContainer'>
            <img src={imageSource}/>
        </div>
    </div>
    <div className='navigation'>
            <button onClick={() => setImageSource(pressHelp)}>Press Help</button>
            <button onClick={() => setImageSource(openAndroidSettings)}>Android Settings</button>
            <button onClick={() => setImageSource(aboutEquipment)}>About Equipment</button>
            <button onClick={() => setImageSource(developerOn)}>Enable Developer</button>
            <button onClick={() => setImageSource(openDeveloperOptions)}>Open Developer Options</button>
            <button onClick={() => setImageSource(turnOnDebug)}>Turn on USB Debugging</button>
        </div>
    </div>
        return (
        <div>
            {howToAdb}       
         </div>
            );
}

export default HowToPage;