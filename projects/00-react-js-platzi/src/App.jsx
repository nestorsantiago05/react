import { useState } from 'react'
import Card from './components/Card'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Card tittle='Car1' description='Ésta es la descripción de la card'></Card>
      <hr />
      <hr />
      <hr />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Counter></Counter>
    </>
  )
}
export default App