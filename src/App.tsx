import { useEffect, useState } from 'react'
import './App.css'
import Monitor from './components/Monitor'
import Mouse from './components/Mouse'
import Total from './components/Total'
import MyContext from './context/MyContext'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'

function App() {

  const [step, setStep] = useState(1);

  const siguiente= () => {
    setStep(step + 1);
  };

  const atras= () => {
    setStep(step - 1);
  };




  const [products] = useState([
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ]);
  
  
  return (
    <>
      
      <MyContext.Provider value={{ products }}>
      <h1>Quiz 02</h1>
       <Stepper step={step}/>
       <Content step={step} />
      <div className='flex'>
        <button onClick={atras} type="button">Prev</button>
        <button onClick={siguiente} type="button">Next</button>
      </div>
    </MyContext.Provider>
    </>
  )
}

export default App
