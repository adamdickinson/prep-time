import { PrepStep, Recipe } from "../types"

export const normaliseRecipeData = (recipeData: any) => {
  const recipes: Recipe[] = []
  for (const data of recipeData) {
    const r = recipeData.indexOf(data)
    const prepSteps: PrepStep[] = []
    for (const prepStepData of data.prepSteps) {
      const p = data.prepSteps.indexOf(prepStepData)
      const { ingredient, instruction, quantity } = prepStepData
      const newStep: PrepStep = {
        id: `${r}-${p}`,
        ingredient,
        instruction,
        quantity,
        completed: false
      }
      prepSteps.push(newStep)
    }

    recipes.push({
      id: r,
      name: data.name,
      servings: data.servings,
      prepSteps,
      cookingSteps: data.cookingSteps
    })
  }
  return recipes
}
