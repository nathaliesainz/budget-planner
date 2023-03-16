import React from "react"

const BudgetControl = ({budget}) => {

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
                <span>Available: </span> {amountFormatted(0)}
            </p>

            <p>
                <span>Spent: </span> {amountFormatted(0)}
            </p>
        </div>
    </div>
  )
}
export default BudgetControl