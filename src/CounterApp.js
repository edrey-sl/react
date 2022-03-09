import React, {useState} from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0);

    const sumar = () =>{
       
        setCounter(counter + 1);
    }


  return <>

  <h1 > CounterAPP </h1> 
  <h2> {counter} </h2>
  <button onClick={sumar}>Sumar +1</button> 
  </>
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp




