import createService from "@adamdickinson/react-service"

import useRecipes from "../hooks/useRecipes"

const [RecipeProvider, useRecipeAPI] = createService(useRecipes)

export { RecipeProvider, useRecipeAPI }
