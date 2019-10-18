import { useEffect, useState } from 'react';
import store from "store"

import { Recipe } from '../types';
import recipes from "../data/recipes"

export default () => {
  const [selected, setSelected] = useState<Recipe[]>(store.get("recipes") || [])

  useEffect(() => {
    store.set("recipes", selected)
  }, [selected])

  const toggle = (recipe: Recipe) => {
    if (selected.some(({ id }) => id === recipe.id)) {
      setSelected(selected.filter(({ id }) => id !== recipe.id))
    } else {
      setSelected([...selected, recipe])
    }
  }

  return {
    available: recipes,
    selected,
    toggle
  }
}
