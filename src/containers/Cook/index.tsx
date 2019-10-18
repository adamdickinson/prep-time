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
  const { selected: recipes } = useRecipeAPI()

  return (
    <Screen>
      <Header>
        <h1>Cooking time</h1>
      </Header>
      {!recipes.length && (
        <p className="note">
          Add recipes to your plan before you start cooking
        </p>
      )}
      {recipes.map(({ id: recipeId, name, cookingSteps }: Recipe) => (
        <React.Fragment key={recipeId}>
          <h2>{name}</h2>
          {cookingSteps.map((cookingStep, p) => {
            const id = `${recipeId}.${p}`
            const completed = false

            return (
              <CheckItem
                onClick={() => {}}
                className={classnames({ inactive: completed, done: completed })}
                key={id}
              >
                {cookingStep}
                {completed ? (
                  <CheckboxMarkedIcon />
                ) : (
                  <CheckboxBlankOutlineIcon />
                )}
              </CheckItem>
            )
          })}
        </React.Fragment>
      ))}
    </Screen>
  )
}
