import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0');
  

  const handleNumber = (event) => {
    const number = event.target.textContent;
    console.log(display.length)
    if(display === '0')
    {setDisplay(number);
      
    }
    
    else {
      
      const checkDecimal = display[display.length -1];
      if(display.length > 10) {
        setDisplay('Max input reached')
      }
      else if(checkDecimal === '.' || !isNaN(checkDecimal)){
        setDisplay(display + number);
      
      } else if(!isNaN(display)) {
        setDisplay(display + number);
      }
      
      
      else {
        setDisplay(display + " " + number);
      }
      
      
    }
  }
  

  const handleOperation = (event) => {
    
    const operation = event.target.textContent;
    const lastChar = display[display.length -1];
    const beforeLastChar = display[display.length -3];
    
    if(['-'].includes(lastChar) &&  operation ==="-") {
      
        alert("Simple calculator, cannot compute subtracting a negative yet");
        return;
   
    }
    
    else if((['+','-','*','/'].includes(lastChar) && operation !== '-') || (['+','-','*','/'].includes(lastChar) && ['+','-','*','/'].includes(beforeLastChar))) {
      if(['+','-','*','/'].includes(beforeLastChar)) {
        setDisplay(prevInput => prevInput.slice(0,-4) + " " + operation );       
      } else 
      {
        
        setDisplay(prevInput => prevInput.slice(0,-2) + " " + operation );}
    } else {
      setDisplay(prevInput => prevInput + " " + operation );
    }
     
      
  
    
}

  const handleEqual = () => {
    const lastChar = display[display.length -1];
    if (['+','-','*','/'].includes(lastChar)){
      let result = eval(display.slice(0,-1).toString())
      setDisplay(result);}
   else { setDisplay(eval(display));}}
    
 
  const handleDecimal =() => {
    const array = display.split(' ')
    const workingNumber = array[array.length-1]
    if(!workingNumber.includes('.') && !isNaN(parseFloat(workingNumber)) && workingNumber !== ""){
      setDisplay(display + '.');
    }
  }

  const handleClear = () => {
    
    setDisplay('0');
  }

  return (
   <div className="App">
    <div className="calculator">
      <div id="display" className="row">{display}</div>
      <div id="clear" className="row buttons" onClick={handleClear}>
        AC
      </div>
      <div id="seven" className="buttons" onClick={handleNumber}>7</div>
      <div id="eight" className="buttons" onClick={handleNumber}>8</div>
      <div id="nine" className="buttons" onClick={handleNumber}>9</div>
      <div id="multiply" className="buttons" onClick={handleOperation}>*</div>
      <div id="four" className="buttons" onClick={handleNumber}>4</div>
      <div id="five" className="buttons" onClick={handleNumber}>5</div>
      <div id="six" className="buttons" onClick={handleNumber}>6</div>
      <div id="divide" className="buttons" onClick={handleOperation}>/</div>
      <div id="one" className="buttons" onClick={handleNumber}>1</div>
      <div id="two" className="buttons" onClick={handleNumber}>2</div>
      <div id="three" className="buttons" onClick={handleNumber}>3</div>
      <div id="add" className="buttons" onClick={handleOperation}>+</div>
      <div id="zero" className="buttons" onClick={handleNumber}>0</div>
      <div id="decimal" className="buttons" onClick={handleDecimal}>.</div>
      <div id="equals" className="buttons" onClick={handleEqual}>=</div>
      <div id="subtract" className="buttons" onClick={handleOperation}>-</div>
    </div>


   </div>
  )
}

export default App
