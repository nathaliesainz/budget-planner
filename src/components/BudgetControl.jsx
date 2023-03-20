import {useState, useEffect} from "react"

const BudgetControl = ({expenses, budget}) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
      const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0);
      const totalAvailable = budget - totalSpent;

      setAvailable(totalAvailable);
      setSpent(totalSpent);
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
            <p>Graphic</p>
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