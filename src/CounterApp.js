import React, {useState} from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const sumar = () => setCounter(counter + 1);
    
    const resta = () => setCounter(counter - 1);
 
    const reset = () => setCounter(value);
    

  return <>

  <h1 > CounterAPP </h1> 
  <h2> {counter} </h2>
  <button onClick={sumar}>Sumar +1</button> 
  <button onClick={reset}>Reset</button> 
  <button onClick={resta}>Menos -1</button> 
  </>
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp




