import CheckboxBlankOutlineIcon from "mdi-react/CheckboxBlankOutlineIcon"
import CheckboxMarkedIcon from "mdi-react/CheckboxMarkedIcon"
import React from "react"
import classnames from "classnames"

import { ShoppingItem } from "../../types"
import { formatQuantity } from "../../helpers/quantity"
import { useShoppingItemAPI } from '../../services/shoppingItem';
import CheckItem from "../../components/CheckItem"
import Header from "../../components/Header"
import Screen from "../../components/Screen"

export default () => {
  const { shoppingItems, toggle } = useShoppingItemAPI()

  return (
    <Screen>
      <Header>
        <h1>Shopping list</h1>
      </Header>
      {!shoppingItems.length && (
        <p className="note">
          Add recipes to your plan before you start shopping
        </p>
      )}
      {shoppingItems.map((shoppingItem: ShoppingItem) => {
        const { id, completed, ingredient, quantity } = shoppingItem
        return (
          <CheckItem
            onClick={() => toggle(shoppingItem)}
            className={classnames({ inactive: completed, done: completed })}
            key={id}
          >
            <div>
              {ingredient}
              <div>
                <small>{formatQuantity(quantity)}</small>
              </div>
            </div>
            {completed ? <CheckboxMarkedIcon /> : <CheckboxBlankOutlineIcon />}
          </CheckItem>
        )
      })}
    </Screen>
  )
}
