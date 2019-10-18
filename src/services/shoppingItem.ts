import createService from "@adamdickinson/react-service"

import useShoppingItems from "../hooks/useShoppingItems"

const [ShoppingItemProvider, useShoppingItemAPI] = createService(
  useShoppingItems
)
export { ShoppingItemProvider, useShoppingItemAPI }
