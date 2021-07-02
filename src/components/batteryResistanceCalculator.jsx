import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import '../components/batteryResistanceCalculator.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import delphinFrame from '../DelphinFrame.png';



function BatteryResistanceCalculator() {
    //const [current, setCurrent] = useState(0);
    const [openVoltage, setOpenVoltage] = useState('');
    const [loadVoltage, setLoadVoltage] = useState('');
    const [loadResistance, setLoadResistance] = useState(5);
  //  const [voltageDrop, setVoltageDrop] = useState(0);
    const [internalResistance, setInternalResistance] = useState('');

    function doCalculation() {
        // setVoltageDrop(openVoltage - loadVoltage);
        // setCurrent(loadVoltage / loadResistance);        
        // setInternalResistance(voltageDrop / current);
     setInternalResistance((openVoltage - loadVoltage) / (loadVoltage / loadResistance) )
       }




    function getOpenVoltageFromTextBox(){
        setOpenVoltage(document.getElementById("openVoltageTextBox").value)
    }
    function getLoadVoltageFromTextBox(){
        setLoadVoltage(document.getElementById("loadVoltageTextBox").value)
    }
    function getResistanceFromTextBox(){
        setLoadResistance(document.getElementById("resistanceTextBox").value)
    }
    const openVoltageTextBoxElement  = <TextField required inputMode='numeric' margin='dense' className = 'textBox' id="openVoltageTextBox" label="Open Voltage" variant="filled"  value={openVoltage} onChange={getOpenVoltageFromTextBox} />;
    const loadVoltageTextBoxElement = <TextField required margin='dense' className = 'textBox' id="loadVoltageTextBox" label="Load Voltage" variant="filled" value={loadVoltage} onChange={getLoadVoltageFromTextBox} />;
    const resistanceTextBoxElement =  <TextField required margin='dense' className = 'textBox' id="resistanceTextBox" label="Load Resistance" variant="filled" value={loadResistance} onChange={getResistanceFromTextBox}/>;
    var resultLabelElement = <h2 className='internalResistanceLabel'>{(internalResistance * 1000).toFixed()} mOhms</h2>


 

    const batteryCalculatorCardElement = 
        <div className='container' >
            <div className='delphin-screen-container'>

             <div className='card'>
                <h1 className = 'title'>Battery Ω Calculator</h1>
                <h3>{loadResistance} Ω Load</h3>
                <form className = 'inputForm' autoComplete="off">
                    <div className = 'textBoxes'>
                    <div className = 'textBox'>{openVoltageTextBoxElement}</div>
                    <br/>
                    
                    <div className = 'textBox'>{loadVoltageTextBoxElement}</div>
                    <br/>
                    {/* <div className = 'textBox'> {resistanceTextBoxElement}</div> */}
                    </div>
                    <Button className = 'calculate-button' onClick = { doCalculation}
                    color='primary' 
                    variant='contained'>                      
                        
                        Calculate    

                    </Button> 
                    {resultLabelElement}


                </form>
                </div>

                        
            </div>
            
        </div>

            

    return (
        <div>
            {batteryCalculatorCardElement}
                

        </div>
        
    
     );
    


}

/*class batteryResistanceCalculator extends Component {

            state = {
            calculatedCurrent :'',
            openVoltage:4.16,
            loadVoltage:4.15,
            loadResistance:10,
            voltageDrop:'',
            internalResistance:''
            }
    



    calculateVoltageDrop = () => {
        this.setState({voltageDrop: this.state.openVoltage - this.state.loadVoltage})
    }
    calculateCurrent = () => {
      this.setState({calculatedCurrent: this.state.loadVoltage / this.state.loadResistance},);
    }
    calculateInternalResistance = () => {
    
        this.setState({internalResistance: this.state.voltageDrop / this.state.calculatedCurrent});
    }

    wrapperFunction = () => {
        this.calculateVoltageDrop();
        this.calculateCurrent();
        this.calculateInternalResistance();
    }

    render() { 
        return (
            <div>
                <Card></Card>
                <Button onClick = {this.wrapperFunction}
                    color='primary' 
                    variant='contained'>                        
                         
                         Calculate    

                </Button>

            

                <h2>{this.state.internalResistance}</h2>
                <h1>{this.state.voltageDrop}</h1>
                <h3>{this.state.calculatedCurrent}</h3>
                               
                
            </div>
         );
        }
    }

*/

export default BatteryResistanceCalculator;