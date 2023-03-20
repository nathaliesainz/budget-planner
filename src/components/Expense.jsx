import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formattedDate } from "../helpers";

import SavingsIcon from "../img/icono_ahorro.svg";
import HouseIcon from "../img/icono_casa.svg";
import FoodIcon from "../img/icono_comida.svg";
import OthersIcon from "../img/icono_gastos.svg";
import HobbiesIcon from "../img/icono_ocio.svg";
import HealthIcon from "../img/icono_salud.svg";
import SubscriptionsIcon from "../img/icono_suscripciones.svg";

const iconsDictionary = {
  savings: SavingsIcon,
  house: HouseIcon,
  food: FoodIcon,
  others: OthersIcon,
  hobbies: HobbiesIcon,
  health: HealthIcon,
  subscriptions: SubscriptionsIcon,
};

const Expense = ({ expense }) => {
  const { category, name, amount, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log('Editing...')}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('Deleting...')}>
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
            <div className="gasto sombra">
              <div className="contenido-gasto">
                <img src={iconsDictionary[category]} alt="Expense Icon" />
                <div className="descripcion-gasto">
                  <p className="categoria">{category}</p>
                  <p className="nombre-gasto">{name}</p>
                  <p className="fecha-gasto">
                    Added on: {""}
                    <label>{formattedDate(date)}</label>
                  </p>
                </div>
              </div>
              <p className="cantidad-gasto">${amount}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  );
};
export default Expense;
