import CheckboxBlankOutlineIcon from "mdi-react/CheckboxBlankOutlineIcon"
import CheckboxMarkedIcon from "mdi-react/CheckboxMarkedIcon"
import React from "react"
import classnames from "classnames"

import { Recipe } from '../../types';
import { useRecipeAPI } from "../../services/recipe"
import CheckItem from "../../components/CheckItem"
import Header from "../../components/Header"
import Screen from "../../components/Screen"

export default () => {
  const { available, selected, toggle } = useRecipeAPI()

  return (
    <Screen>
      <Header>
        <h1>What are we cooking today?</h1>
      </Header>
      {available.map((recipe: Recipe) => {
        const { id, name, servings } = recipe
        const isSelected = selected.some(
          (selectedRecipe: Recipe) => selectedRecipe.id === id
        )
        return (
          <CheckItem
            onClick={() => toggle(recipe)}
            className={classnames({ inactive: !isSelected })}
            key={id}
          >
            <div>
              {name}
              <div>
                <small>Serves {servings}</small>
              </div>
            </div>
            {isSelected ? <CheckboxMarkedIcon /> : <CheckboxBlankOutlineIcon />}
          </CheckItem>
        )
      })}
    </Screen>
  )
}
