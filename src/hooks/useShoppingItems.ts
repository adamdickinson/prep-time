import { useEffect, useState } from "react"
import store from "store"

import { ShoppingItem } from "../types"
import { getShoppingItemsFromRecipes } from "../helpers/shoppingItem"
import { useRecipeAPI } from "../services/recipe"

export default () => {
  const { selected: recipes } = useRecipeAPI()
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([])

  useEffect(() => {
    const existing: ShoppingItem[] = store.get("shoppingItems") || []
    const newShoppingItems = getShoppingItemsFromRecipes(
      recipes
    ).map(shoppingItem => ({
      ...shoppingItem,
      completed:
        existing.find(({ id }) => id === shoppingItem.id)?.completed ||
        shoppingItem.completed
    }))

    setShoppingItems(newShoppingItems)
    store.set("shoppingItems", newShoppingItems)
  }, [recipes])

  const toggle = (shoppingItem: ShoppingItem) => {
    const newShoppingItems = shoppingItems.map(existing =>
      existing.id === shoppingItem.id
        ? { ...existing, completed: !existing.completed }
        : existing
    )

    store.set("shoppingItems", newShoppingItems)
    setShoppingItems(newShoppingItems)
  }

  return {
    shoppingItems,
    toggle
  }
}
