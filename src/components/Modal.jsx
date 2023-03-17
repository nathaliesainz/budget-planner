import { useState } from 'react'
import Message from './Message';
import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal, saveExpense}) => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const hideModal = () => {
       setAnimateModal(false)

       setTimeout(() => {
         setModal(false)
       }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([name, amount, category].includes('')){
          setMessage('All fields must be completed')

          setTimeout(() => {
            setMessage('')
          }, 3000);
          return;
        }

        saveExpense({name, amount, category})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={CloseBtn} 
                alt="close modal"
                onClick={hideModal} 
            />
        </div>

        <form
          onSubmit={handleSubmit} 
          className={`formulario ${animateModal ? "animar" : "cerrar" }`}
        >
          <legend>New Expense</legend>
          {message && <Message tipo="error">{message}</Message> }

          <div className="campo">
              <label htmlFor="name">Name Expense</label>

              <input
                  id="name"
                  type="text"
                  placeholder="Add the name of the expense"
                  value={name}
                  onChange={ e => setName(e.target.value) }
              />
          </div>

          <div className="campo">
              <label htmlFor="amount">Amount</label>

              <input
                  id="amount"
                  type="number"
                  placeholder="Add the amount of the expense: ex. 300"
                  value={amount}
                  onChange={ e => setAmount(Number(e.target.value)) }
              />
          </div>

          <div className="campo">
              <label htmlFor="category">Category</label>

              <select  
                id="category"
                value={category}
                onChange={ e => setCategory(e.target.value) } 
              >
                <option value="">-- Select --</option>
                <option value="savings">Savings</option>
                <option value="food">Food</option>
                <option value="house">House</option>
                <option value="others">Others</option>
                <option value="hobbies">Hobbies</option>
                <option value="health">Health</option>
                <option value="subscriptions">Subscriptions</option>
              </select>
          </div>

          <input type="submit" value="Add Expense" />

        </form>
    </div>
  )
}
export default Modal