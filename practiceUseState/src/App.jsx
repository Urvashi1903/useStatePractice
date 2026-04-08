import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  function increaseBy1(){
    setNum(num+1);
  }

  function decreaseBy1(){
    setNum(num-1);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseBy1}>Increase</button>
      <button onClick={decreaseBy1}>Decrease</button>
    </div>
  )
}

export default App