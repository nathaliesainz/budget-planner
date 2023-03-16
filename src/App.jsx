import { useState } from 'react'
import Header from './components/Header'
import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget} 
      />


    {isValidBudget && (
      <div className='nuevo-gasto'>
        <img src={NewExpenseIcon} alt="new expense icon" />
      </div>
    )}
    
    </div>
  )
}

export default App
