export interface PrepStep {
  id: string
  ingredient: string
  instruction?: string
  quantity?: Quantity
  completed: boolean
}

export interface Quantity {
  value: number
  unit?: string
}

export interface ShoppingItem {
  id: string
  quantity: Quantity
  ingredient: string
  completed: boolean
}

export interface Recipe {
  id: number
  name: string
  servings: number
  prepSteps: PrepStep[]
  cookingSteps: string[]
}
