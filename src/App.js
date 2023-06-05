import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  // Khai báo nhiều state
  const [state, setState] = useState({ count: 0, count2: 0 })

  useEffect(function () {
    document.title = `You clicked ${count} times`
    console.log('useEffect')
  }, [count])

  const handleIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={handleIncrease}>Click me</button>
    </div>
  );
}

export default App;
