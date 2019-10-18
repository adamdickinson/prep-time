import { Recipe, ShoppingItem } from "../types"
import { getPrepStepsFromRecipes } from "./prepStep"

export const getShoppingItemsFromRecipes = (recipes: Recipe[]) => {
  const prepSteps = getPrepStepsFromRecipes(recipes)
  let id = 0

  const shoppingItems: ShoppingItem[] = []
  for (let step of prepSteps) {
    let item = shoppingItems.find(
      ({ ingredient, quantity }) =>
        quantity && quantity?.unit === step.quantity?.unit && ingredient === step.ingredient
    )

    if (item) {
      item.quantity.value += step.quantity.value

    } else {
      shoppingItems.push({
        id: `${step.ingredient}-${step.quantity?.unit || "unitless"}`,
        ingredient: step.ingredient,
        quantity: { ...step.quantity },
        completed: false
      })
    }
  }

  return shoppingItems
}
