import { useState } from 'react'
import Form from "./components/Form/Index";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Form></Form>
    </>
  )
}

export default App
