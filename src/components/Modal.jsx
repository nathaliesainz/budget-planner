import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const hideModal = () => {
       setAnimateModal(false)

       setTimeout(() => {
         setModal(false)
       }, 500);
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

        <form className={`formulario ${animateModal ? "animar" : "cerrar" }`}>
          <legend>New Expense</legend>

          <div className="campo">
              <label htmlFor="name">Name Expense</label>

              <input
                  id="name"
                  type="text"
                  placeholder="Add the name of the expense"
              />
          </div>

          <div className="campo">
              <label htmlFor="amount">Amount</label>

              <input
                  id="amount"
                  type="number"
                  placeholder="Add the amount of the expense: ex. 300"
              />
          </div>

          <div className="campo">
              <label htmlFor="category">Category</label>

              <select  
                id="category" 
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