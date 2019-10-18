import { useEffect, useState } from "react"
import store from "store"

import { PrepStep } from "../types"
import { getPrepStepsFromRecipes } from "../helpers/prepStep"
import { useRecipeAPI } from "../services/recipe"

export default () => {
  const { selected: recipes } = useRecipeAPI()
  const [prepSteps, setPrepSteps] = useState<PrepStep[]>(store.get("prepSteps") || [])

  useEffect(() => {
    const newPrepSteps = getPrepStepsFromRecipes(recipes).map(
      prepStep => prepSteps.find(({ id }: PrepStep) => id === prepStep.id) || prepStep
    )

    store.set("prepSteps", newPrepSteps)
    setPrepSteps(newPrepSteps)
  }, [recipes])

  const toggle = (prepStep: PrepStep) => {
    const newPrepSteps = prepSteps.map((existing: PrepStep) =>
      existing.id === prepStep.id
        ? { ...existing, completed: !existing.completed }
        : existing
    )

    store.set("prepSteps", newPrepSteps)
    setPrepSteps(newPrepSteps)
  }

  return {
    prepSteps,
    toggle
  }
}
