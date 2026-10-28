import React from 'react'

const App = () => {

  const [Num, setNum] = React.useState(20);
  
function increase() {
  setNum(Num + 20);
}

  function decrease() {
  setNum(Num - 10);
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default App
