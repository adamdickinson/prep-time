import { Recipe } from '../types';

export const getPrepStepsFromRecipes = (recipes: Recipe[]) =>
  recipes.flatMap(({ prepSteps }) => prepSteps)
