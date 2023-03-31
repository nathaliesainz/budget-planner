import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
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
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                })}
                value={percentage}
                text={`${percentage}% Spent`}
            />
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span> {amountFormatted(budget)}
            </p>

            <p className={`${available < 0 ? 'negativo' : ''}`}>
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