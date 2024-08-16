import { useState } from 'react'
import './App.css'
import Dashboard from '../pages/Dashboard'


function App() {

  
  const [count, setCount] = useState(0)
/*

    const [state, setState] = useState(initialState);

    Hier ist eine Erklärung der Teile:
      •	state (Hier count): Der aktuelle Zustand der Komponente.
      •	setState (Hier setCount): Eine Funktion, die verwendet wird, um den Zustand zu aktualisieren.
      •	initialState (Hier 0): Der Anfangswert des Zustands.

  */
  return (
    <>
      
      <Dashboard/>
      
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        </div>
    </>
  )
}

export default App
