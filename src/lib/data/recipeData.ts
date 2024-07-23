import { Recipe } from "../class/Recipe";

const recipes = [
    new Recipe(
        "Puff Pastry",
        [
            "8.5 oz All-Purpose Flour", 
            "20 oz cold Butter",
            "0.75 cup ice water",
            "Kosher salt",
            "Egg for egg wash",
        ],
        [
            "Start by combining 8.5 ounces of All-Purpose Flour, 4 ounces of cold cubed butter, and a pinch of kosher salt",
            "Cut up the cubed butter into pea-sized shape by using a pastry blender, knives, or hand",
            "Get 0.75 cup of ice water and start by adding most of the water into the butter and flour batch, then mix together with a wooden spoon. If it is too dry, add the rest of the ice water",
            "When you get a crumbly, but cohesive dough, take it out onto a unfloured work service and bring it all together into one unified dough ball",
            "Wrap the dough in plastic wrap and fridge it for 30 minutes to hydrate the flour and to ensure the butter haven't melted",
            "Roll it out in a rectangular shape and tri-fold the dough",
            "Repeat until the dough becomes semi-smooth dough (takes about 3 rolls of folds)",
            "Wrap the dough in plastic wrap and place it back into the fridge",
            "Grate an entire stick of frozen butter (16 ounces) by hand or food processor with the grating attachment",
            "Place the grated butter in a plate/bowl and set aside on the side and sprinkle some flour to prevent stickage",
            "Bring the dough out from the fridge and place about half worth of the grated butter on the dough",
            "Roll and tri-fold the dough twice before adding the remaining grated butter",
            "Fold the dough like a book",
            "Roll and tri-fold the dough about two more times",
            "Roll out the dough and cut into any desired shape",
            "Place the dough onto a baking sheet and apply some egg wash and salt to each of the dough",
            "Place the baking sheet into the oven at 400 degrees fahrenheit for about 15 minutes"
        ],
        90,
        "/public/puffpastry.png"
    ),
    new Recipe(
        "Potato and Leek Soup",
        [
            "1.5 pound leeks (about 4 or 5)",
            "4 tablespoons unsalted butter",
            "2 teaspoons kosher salt, plus more to taste",
            "1.25 pound Yukon gold potatoes",
            "3-4 cups chicken broth/vegetable stock, or as needed to adjust the thickness",
            "1 cup heavy cream",
            "0.5 cup creme fraiche, plus more to garnish",
            "pinch of cayenne pepper",
            "sliced fresh chives for garnish"
        ],
        [
            "Prepare the leeks by cutting the root section and about 1 or 2 inch above the green part, then cut it in half long way and slice the leeks",
            "Place the leeks into a large bowl and cover with cold fresh water. Clean the leeks to remove dirt and debris and repeat until it is fully clean",
            "Partially melt 4 tablespoons of unsalted butter into a large pot on medium-high heat",
            "Transfer in the leeks into the pot and add a spoon of salt",
            "Continue cooking the leeks in medium-high heat until they start to break down and soften up (3-4 minutes)",
            "When the leeks starts to slump, reduce heat to medium",
            "Continue cooking for 30 minutes or until very, very soft or almost paste like. Stirring occasionally. Do not rush",
            "While the leeks are cooking, prep the potatoes by peeling them and cutting them into eights. Place them in water to prevent brownage",
            "When the leeks are ready, drain the potatoes and add them into the pot, add some more salt and cooking liquid (chicken broth/vegetable stock)",
            "Adjust the heat to maintain a steady simmer",
            "Cook until the potatoes are very soft or cooked",
            "Use an immersion blender to blend the ingredients in the pot or transfer to blender to blend the ingredients in batches to avoid burns",
            "Blend the ingredients until the soup becomes a very smooth puree",
            "Add in heavy cream, a nice big spoon of creme fraiche and stir the soup",
            "Heat the soup back up",
            "Taste the soup for seasoning",
            "Serve the soup in pre-heated bowls and finish it up with some creme fraiche and some chives",
            "Enjoy!"
        ],
        75,
        "/public/potatoleeksoup.png"
    ),
]

export const getRecipes = (): Recipe[] => {
    return recipes;
}

export const getRecipe = (food: string): Recipe | undefined => {
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name === food) {
            return recipes[i];
        }
    }
}