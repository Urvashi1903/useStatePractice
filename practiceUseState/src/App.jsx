import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  function increaseBy1() {
    setNum(num + 1);
  }

  function decreaseBy1() {
    setNum(num - 1);
  }

  return (
    <div>
      <h1>{num}</h1>
      <div className='btn'>
        <button onClick={decreaseBy1}>Decrease by 1</button>
        <button onClick={increaseBy1}>Increase by 1</button>
      </div>
    </div>
  )
}

export default App