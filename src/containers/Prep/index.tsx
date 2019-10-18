import CheckboxBlankOutlineIcon from "mdi-react/CheckboxBlankOutlineIcon"
import CheckboxMarkedIcon from "mdi-react/CheckboxMarkedIcon"
import React from "react"
import classnames from "classnames"
import groupBy from "lodash/groupBy"

import { PrepStep } from "../../types"
import { formatQuantity } from "../../helpers/quantity"
import { usePrepStepAPI } from "../../services/prepStep"
import CheckItem from "../../components/CheckItem"
import Header from "../../components/Header"
import Screen from "../../components/Screen"

export default () => {
  const { prepSteps, toggle } = usePrepStepAPI()
  const prepStepsByIngredient: { [key: string]: PrepStep[] } = groupBy(
    prepSteps.filter(({ instruction }: PrepStep) => !!instruction),
    "ingredient"
  )

  return (
    <Screen>
      <Header>
        <h1>Prep steps</h1>
      </Header>
      {!prepSteps.length && (
        <p className="note">
          Add recipes to your plan before you start prepping
        </p>
      )}
      {Object.entries(prepStepsByIngredient).map(([ingredient, prepSteps]) => (
        <React.Fragment key={ingredient}>
          <h2>{ingredient}</h2>
          {prepSteps.map((prepStep: PrepStep) => {
            const { id, completed, quantity, instruction } = prepStep

            return (
              <CheckItem
                onClick={() => toggle(prepStep)}
                className={classnames({ inactive: completed, done: completed })}
                key={id}
              >
                <span>
                  <small>{formatQuantity(quantity) || "-"}</small> {instruction}
                </span>
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
