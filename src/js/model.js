import { API_URL } from './config.js';
import { getJson } from './helper.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    const data = await getJson(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      title: recipe.title,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
    };
  } catch (err) {
    // NOTE:TEMP error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
