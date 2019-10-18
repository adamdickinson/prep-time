import { Recipe } from "../types"
import { normaliseRecipeData } from '../helpers/recipes';

const recipes: Recipe[] = normaliseRecipeData([
  {
    name: "Peanut Soba Noodle Slaw",
    servings: 4,
    prepSteps: [
      { ingredient: "Soba Noodle", quantity: { value: 4, unit: "ounce" } },
      { ingredient: "Cabbage", instruction: "Sliced into quarters and core removed", quantity: { value: 0.25 } },
      { ingredient: "Brussel Sprout", instruction: "Nubby ends removed", quantity: { value: 12 } },
      { ingredient: "Carrot", instruction: "Peeled", quantity: { value: 4 } }, 
      { ingredient: "Scallion", instruction: "Trimmed and sliced into thin rounds", quantity: { value: 1, unit: "bunch" } },
      { ingredient: "Peanut Butter", quantity: { value: 0.5, unit: "cup" } },
      { ingredient: "White Wine Vinegar", quantity: { value: 3, unit: "tablespoon" } },
      { ingredient: "Toasted Sesame Oil", quantity: { value: 3, unit: "tablespoon" } },
      { ingredient: "Tamari", quantity: { value: 3, unit: "tablespoon" } },
      { ingredient: "Honey", quantity: { value: 2, unit: "tablespoon" } },
      { ingredient: "Ginger", instruction: "Finely grated", quantity: { value: 1, unit: "tablespoon" } },
      { ingredient: "Garlic", instruction: "Pressed or minced", quantity: { value: 2, unit: "clove" } },
      { ingredient: "Peanuts", instruction: "Coarsely chopped", quantity: { value: 1, unit: "sprinkle" } },
      { ingredient: "Coriander", instruction: "Coarsely torn", quantity: { value: 1, unit: "handful" } },
      { ingredient: "Lime", instruction: "Sliced into wedges", quantity: { value: 1 } },
      { ingredient: "Sriracha", quantity: { value: 1, unit: "to taste" } }
    ],
    cookingSteps: [
      "Cook the soba noodles: Bring a large pot of water to boil and cook the noodles according to package directions. Drain and rinse with cold water before returning to pot.",
      "Prepare the vegetables: This is easier in a food processor than by hand. If using a food processor, shred the cabbage and sprouts with the slicing disk, then grate the carrots using the grating disk. Or use a chef’s knife to chop the cabbage and sprouts into thin strips, then coarsely grate the carrots.",
      "Prepare the dressing: In a 2-cup liquid measuring cup or medium bowl, whisk together the dressing ingredients until smooth. If the mixture should be thick but drizzly; if it’s too thick, whisk in water in 1 tablespoon increments until it is (at which point you might need to add a little salt, to taste, since the flavors have been diluted.)",
      "In a large serving bowl, combine the cooked soba noodles, shredded cabbage and sprouts, grated carrots, and chopped green onions. Pour dressing over the vegetables and toss to coat (you may or may not need all of the dressing). For best flavor, let the slaw marinate for 20 minutes before serving.",
      "Serve slaw with a sprinkling of chopped peanuts, torn cilantro and a lime wedge. Serve with sriracha on the side, if you’d like a spicy kick. This slaw keeps very well for a few days (covered and refrigerated). Before serving, wake up the flavors with a dash of lime juice or vinegar and more fresh cilantro."
    ]
  },
  {
    name: "Easy Vegan Chilli Sin Carne",
    servings: 6,
    prepSteps: [
      { ingredient: "Olive Oil", quantity: { value: 2, unit: "teaspoon" } },
      { ingredient: "Garlic", instruction: "Minced", quantity: { value: 3, unit: "clove" } },
      { ingredient: "Red Onion", instruction: "Thinly sliced", quantity: { value: 1, unit: "large" } },
      { ingredient: "Celery", instruction: "Finely chopped", quantity: { value: 2, unit: "stalk" } },
      { ingredient: "Carrot", instruction: "Peeled and finely chopped", quantity: { value: 2, unit: "medium" } },
      { ingredient: "Red Capsicum", instruction: "Roughly chopped", quantity: { value: 2 } },
      { ingredient: "Cumin (Ground)", quantity: { value: 1, unit: "teaspoon" } }, 
      { ingredient: "Chilli Powder", quantity: { value: 1, unit: "teaspoon" } },
      { ingredient: "Diced Tomatoes", quantity: { value: 800, unit: "gram" } },
      { ingredient: "Red Kidney Beans", instruction: "Drained and rinsed", quantity: { value: 400, unit: "gram" } },
      { ingredient: "Split Red Lentils", quantity: { value: 100, unit: "gram" } },
      { ingredient: "Frozen Soy Mince", quantity: { value: 400, unit: "gram" } },
      { ingredient: "Vegetable Stock", quantity: { value: 250, unit: "ml" } }
    ],
    cookingSteps: [
      "Heat the olive oil in a large saucepan.",
      "Sauté the garlic, onion, celery, carrots and peppers for a few minutes, on a medium heat, until softened.",
      "Add the cumin, chilli powder, salt and pepper and stir.",
      "Pour in the chopped tomatoes, kidney beans, lentils, soy mince and vegetable stock. Add in the extra flavourings, if using.",
      "Simmer for 25 minutes.",
      "Serve with some steamed basmati rice, some fresh torn coriander and a squeeze of lime juice. Enjoy!",
      "Freezes well. Keeps for up to 4 days refrigerated."
    ]
  },
  {
    name: "Coconut Curried Sweet Potato & Chickpea Stew",
    servings: 5,
    prepSteps: [
      { ingredient: "Yellow Onion", quantity: { value: 1 } },
      { ingredient: "Vegetable Oil", quantity: { value: 1, unit: "tablespoon" } },
      { ingredient: "Garlic", quantity: { value: 3, unit: "clove" } },
      { ingredient: "Cinnamon", quantity: { value: 0.5, unit: "teaspoon" } },
      { ingredient: "Tumeric", quantity: { value: 0.5, unit: "teaspoon" } },
      { ingredient: "Cumin", quantity: { value: 0.5, unit: "teaspoon" } },
      { ingredient: "Coriander", quantity: { value: 0.5, unit: "teaspoon" } },
      { ingredient: "Ground Cloves", quantity: { value: 0.5, unit: "teaspoon" } },
      { ingredient: "Salt" },
      { ingredient: "Ginger", instruction: "Freshly grated", quantity: { value: 1, unit: "teaspoon" } },
      { ingredient: "Red Chilli", quantity: { value: 1 } },
      { ingredient: "Diced Tomatoes", quantity: { value: 400, unit: "gram" } },
      { ingredient: "Chickpeas", quantity: { value: 400, unit: "gram" } },
      { ingredient: "Sweet Potato", quantity: { value: 1.5 } },
      { ingredient: "Coconut Milk", quantity: { value: 400, unit: "millilitre" } },
      { ingredient: "Parsley", instruction: "Chopped", quantity: { value: 0.5, unit: "cup" } },
      { ingredient: "Jasmine Rice" }
    ],
    cookingSteps: [
      "In a large, deep skillet, heat the vegetable oil and a small yellow onion (loosely diced). Allow this to soften for 3-4 minutes while mincing the garlic & chili and gathering the spices (which are essential for a good curry).",
      "Next, add the garlic, chili, and ginger to the onions with about 1/2 a teaspoon of each spice. As with all good curries, you develop so much more flavor by directly spicing the onions at the beginning as opposed to adding them to the completed dish later on. Stir and allow the spices to mingle with the onions for several minutes.",
      "Now, add almost all the other ingredients to the pan – throw in the (drained and rinsed) chickpeas, the can of tomatoes, the light coconut milk*, and about 1 large sweet potato that has been peeled and diced into ~1 inch chunks.",
      "Turn the heat down to a simmer, cover, and go take a break. This curry will need at least 30 minutes (50 is ideal) to fully break down and absorb all these beautiful spices. Stir occasionally and give the dish at taste after 20 minutes; I often add a lot more spices at this point; especially cinnamon, turmeric, and salt. If you want the dish extra spicy, a dash of cayenne pepper wouldn’t be a bad idea.",
      "At the last minute before serving, add a handful or two of fresh chopped parsley to complete this dish. Serve atop fluffy jasmine rice for an unforgettably creamy and comforting meal. Again, this keeps amazingly well in the refrigerator for 2-3 days. Yay for leftovers!"
    ]
  },
  {
    name: "Black Bean Chilli",
    servings: 4,
    prepSteps: [
      { ingredient: "Olive Oil", quantity: { value: 2, unit: "teaspoon" } },
      { ingredient: "Garlic", instruction: "Finely chopped", quantity: { value: 4, unit: "clove" } },
      { ingredient: "Onion", instruction: "Chopped", quantity: { value: 3 } },
      { ingredient: "Paprika", quantity: { value: 3, unit: "tablespoon" } },
      { ingredient: "Ground Cumin", quantity: { value: 3, unit: "tablespoon" } },
      { ingredient: "Cider Vinegar", quantity: { value: 3, unit: "tablespoon" } },
      { ingredient: "Brown Sugar", quantity: { value: 2, unit: "tablespoon" } },
      { ingredient: "Chopped Tomatoes", quantity: { value: 800, unit: "gram" } },
      { ingredient: "Black Beans", quantity: { value: 800, unit: "gram" } }
    ],
    cookingSteps: [
      "In a large pot, heat the olive oil and fry the garlic and onions for 5 mins until almost softened. Add the pimenton and cumin, cook for a few mins, then add the vinegar, sugar, tomatoes and some seasoning. Cook for 10 mins.",
      "Pour in the beans and cook for another 10 mins. Serve with rice and the accompaniments of your choice in small bowls."
    ]
  },
  {
    name: "Lentil Shepherds Pie",
    servings: 6,
    prepSteps: [
      { ingredient: "Butter", quantity: { value: 2, unit: "tablespoon" } },
      { ingredient: "Red Onion", quantity: { value: 1.5 }, instruction: "Chopped" },
      { ingredient: "Carrot", quantity: { value: 2 }, instruction: "Finely diced" },
      { ingredient: "Celery", quantity: { value: 4, unit: "stalk" }, instruction: "Finely chopped" },
      { ingredient: "Button Mushrooms", quantity: { value: 150, unit: "gram" }, instruction: "Chopped" },
      { ingredient: "Thyme", quantity: { value: 2, unit: "teaspoon" } },
      { ingredient: "French/Puy Lentils", quantity: { value: 250, unit: "gram" } },
      { ingredient: "Vegetable Stock", quantity: { value: 900, unit: "millilitre" }, instruction: "Made up" },
      { ingredient: "Tomato Puree", quantity: { value: 2, unit: "tablespoon" } },
      { ingredient: "Potato", quantity: { value: 850, unit: "gram" }, instruction: "Cut into chunks" },
      { ingredient: "Butter", quantity: { value: 75, unit: "gram" } },
      { ingredient: "Milk", quantity: { value: 100, unit: "millilitre" } },
    ],
    cookingSteps: [
      "To make the filling, heat the butter or oil in a large saucepan and gently fry the onion, carrots, celery and garlic for 15 mins until soft and golden. Turn up the heat, add the mushrooms, then cook for 3-4 mins. Sprinkle in the thyme and add the lentils. Pour over the wine and stock, then simmer gently, uncovered, for about 40-45 mins until the lentils are soft. If you find the mixture is drying out, you can add a splash more stock or water.",
      "Meanwhile, put the potatoes in a large pan, pour over boiling water and boil for 15-20 mins until tender. Drain well. You can use a potato ricer at this stage to make them super creamy, or mash with the butter and milk, then season with salt and pepper.",
      "Remove the lentils from the heat, add the tomato purée and Marmite, if using. Stir well and check to see if you need seasoning, then add a good grinding of black pepper.",
      "Heat oven to 200C/180C fan/gas 6. To assemble, butter four-six small pie dishes or one a large dish and spoon in the lentil mixture, then top with mash. It’s fun to pipe on the mash if you have a piping bag, but if not, you can spoon it on and fluff into peaks with a fork. Bake for 30-40 mins until golden. Serve with peas on the side, if you like.",
    ]
  },
  {
    name: "Slow Cooker Chickpea and Butternut Pumpkin Red Lentil Stew",
    servings: 6,
    prepSteps: [
      { ingredient: "Onion", quantity: { value: 1 }, instruction: "Chopped" },
      { ingredient: "Cooking Oil", quantity: { value: 1, unit: "tablespoon" }, instruction: "Chopped" },
      { ingredient: "Carrot", quantity: { value: 2 }, instruction: "Chopped" },
      { ingredient: "Garlic", quantity: { value: 2, unit: "clove" }, instruction: "Minced" },
      { ingredient: "Jalapeno", quantity: { value: 1 }, instruction: "Seeded and minced" },
      { ingredient: "Garam Masala", quantity: { value: 3, unit: "teaspoon" } },
      { ingredient: "Butternut Pumpkin", quantity: { value: 1.25, unit: "kilogram" }, instruction: "Peeled and chopped" },
      { ingredient: "Diced Tomatoes", quantity: { value: 800, unit: "gram" } },
      { ingredient: "Vegetable Stock", quantity: { value: 1, unit: "litre" } },
      { ingredient: "Red Lentil", quantity: { value: 1, unit: "cup" } },
      { ingredient: "Chickpea", quantity: { value: 800, unit: "gram" } },
    ],
    cookingSteps: [
      "Heat the oil in a large skillet over medium high heat. Add the onion, carrot and jalapeno and saute for about six minutes. Add the minced garlic and saute for 30 more seconds, and then add the garam masala, stirring well to coat. Take off heat.",
      "Place the chickpeas, butternut squash, canned diced tomatoes, red lentils, vegetable broth and onion mixture in your slow cooker. Turn the heat on LOW and cook for 8-10 hours…the longer you cook, the thicker your stew will be.",
      "Season with sea salt to taste and serve with minced cilantro on top. This stew freezes extremely well and will keep in the fridge for up to five days.",
    ]
  },
  {
    name: "Lentil Ragu",
    servings: 6,
    prepSteps: [
      { ingredient: "Olive Oil", quantity: { value: 3, unit: "tablespoon" } },
      { ingredient: "Onion", quantity: { value: 2 }, instruction: "Finely chopped" },
      { ingredient: "Carrot", quantity: { value: 3 }, instruction: "Finely chopped" },
      { ingredient: "Celery", quantity: { value: 3, unit: "stalk" }, instruction: "Finely chopped" },
      { ingredient: "Garlic", quantity: { value: 3, unit: "clove" }, instruction: "Crushed" },
      { ingredient: "Red Lentil", quantity: { value: 500, unit: "gram" } },
      { ingredient: "Diced Tomatoes", quantity: { value: 800, unit: "gram" } },
      { ingredient: "Tomato Puree", quantity: { value: 2, unit: "tablespoon" } },
      { ingredient: "Oregano", quantity: { value: 2, unit: "teaspoon" } },
      { ingredient: "Thyme", quantity: { value: 2, unit: "teaspoon" } },
      { ingredient: "Bay Leaf", quantity: { value: 3 } },
      { ingredient: "Vegetable Stock", quantity: { value: 1, unit: "litre" } },
      { ingredient: "Spaghetti", quantity: { value: 500, unit: "gram" } },
      { ingredient: "Parmesan" },
    ],
    cookingSteps: [
      "Heat the oil in a large saucepan and add the onions, carrots, celery and garlic. Cook gently for 15-20 mins until everything is softened. Stir in the lentils, chopped tomatoes, tomato purée, herbs and stock. Bring to a simmer, then cook for 40-50 mins until the lentils are tender and saucy – splash in water if you need. Season.",
      "If eating straight away, keep on a low heat while you cook the spaghetti, following pack instructions. Drain well, divide between pasta bowls or plates, spoon sauce over the top and grate over some cheese. Alternatively, cool the sauce and chill for up to 3 days. Or freeze for up to 3 months. Simply defrost portions overnight at room temperature, then reheat gently to serve."
    ]
  },
  {
    name: "Melanzane Lasagne",
    servings: 4,
    prepSteps: [
      { ingredient: "Eggplant", quantity: { value: 3 }, instruction: "Sliced lengthways" },
      { ingredient: "Olive Oil", quantity: { value: 2, unit: "tablespoon" } },
      { ingredient: "Garlic", quantity: { value: 3, unit: "clove" }, instruction: "Crushed" },
      { ingredient: "Passata", quantity: { value: 680, unit: "millilitre" } },
      { ingredient: "Oregano", quantity: { value: 0.5, unit: "tablespoon" } },
      { ingredient: "Sugar", quantity: { value: 1, unit: "teaspoon" } },
      { ingredient: "Red Wine Vinegar", quantity: { value: 1, unit: "tablespoon" } },
      { ingredient: "Basil Leaves", quantity: { value: 1, unit: "small bunch" }, instruction: "Torn" },
      { ingredient: "Parmesan", quantity: { value: 100, unit: "gram" } },
      { ingredient: "Mozarella", quantity: { value: 125, unit: "gram" }, instruction: "Torn" },
      { ingredient: "Lasagne Sheet", quantity: { value: 200, unit: "gram" } },
      { ingredient: "Breadcrumb", quantity: { value: 5, unit: "tablespoon" } },
    ],
    cookingSteps: [
      "Heat grill to high. Arrange the aubergine slices on a baking sheet, brush with oil and season well. Grill for 2-3 mins each side until golden brown, set aside.",
      "Heat oil in a saucepan. Fry the garlic for 1 min then pour in the passata. Simmer for 10 mins with the oregano, sugar and vinegar, then season and stir in the basil.",
      "Assemble the lasagne in a roughly A4-sized baking dish. Spread a few tbsp of the tomato sauce over the base of the dish, followed by a layer of aubergine. Scatter over some Parmesan and mozzarella, then cover with a layer of lasagne. Repeat, finishing with a topping of Parmesan and mozzarella, and sprinkle on the breadcrumbs.",
      "Allow to cool at this point for freezing, or heat oven to 200C/180C fan/gas 6 and cook the lasagne for 25-30 mins until golden and bubbling."
    ]
  }
])

export default recipes
