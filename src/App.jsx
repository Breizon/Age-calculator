import { useState } from 'react'
import './App.css'
import AgeCard from './components/AgeCard'

function App() {
  const [birthday, setBirthday] = useState(null)

  const calculateAge = (birthday) => {
    setBirthday(birthday)
  }

  return (
    <div className="App">
      <AgeCard 
      onCalculate={calculateAge}
      birthday={birthday}
      />
    </div>
  )
}

export default App
