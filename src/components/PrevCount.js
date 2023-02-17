import React, { useState } from 'react'

function PrevCount() {
    const initialVal = 0;
    const [count, setCount] = useState(initialVal)


    const incrementFive = () => {
        for (let i=0; i<5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const decrementFive = () => {
        for (let i=0; i<5; i++) {
            setCount(prevCount => prevCount - 1)
        }
    }

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => {decrementFive()}}>-5</button>
        <button onClick={() => {decrementCount()}}>-</button>
        <button onClick={() => {incrementCount()}}>+</button>
        <button onClick={() => {incrementFive()}}>+5</button>
        <div>
            <button onClick={() => setCount(initialVal)}>Reset</button>
        </div>
    </div>
  )
}

export default PrevCount