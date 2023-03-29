import {useState, useEffect} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({expenses, budget}) => {

    const [percentage, setPercentage] = useState(0);
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
      const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0);
      const totalAvailable = budget - totalSpent;

      const newPercentage = (( (budget - totalAvailable) / budget ) * 100).toFixed(2);

      
      setAvailable(totalAvailable);
      setSpent(totalSpent);
      setTimeout(() => {
        setPercentage(newPercentage);
      }, 1500);
    }, [expenses])
    

    const amountFormatted = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }


  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar 
                value={percentage}
            />
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span> {amountFormatted(budget)}
            </p>

            <p>
                <span>Available: </span> {amountFormatted(available)}
            </p>

            <p>
                <span>Spent: </span> {amountFormatted(spent)}
            </p>
        </div>
    </div>
  )
}
export default BudgetControl