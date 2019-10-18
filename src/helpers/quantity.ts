import fraction from "fracty"
import pluralize from "pluralize"

import { Quantity } from "../types"

export const formatQuantity = (quantity: Quantity) => {
  if (!quantity) return "";
  const { value, unit } = quantity;

  if (!unit) {
    if ([2, 3, 4, 5].some((d: number) => !((value * d) % 0))) {
      return fraction(value)
    }
    return value
  }

  if (unit === "gram") {
    if (value >= 1000) {
      return `${value / 1000}kg`
    } else if (value < 1) {
      return `${value * 1000}mg`
    }
    return `${value}g`
  }

  return `${value} ${pluralize(unit, value)}`
}
