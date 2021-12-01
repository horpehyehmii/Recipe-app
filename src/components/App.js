import React, {useState} from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'

export const RecipeContext = React.createContext()

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: 3,
      name: 'Plain ____',
      servings: 3,
      cookTime: '5:00',
      instructions: "1. Put salt on ____\n2. Put ____ in oven\n3. Eat ____",
      ingredients: [
        {
          id: 1,
          name: '____',
          amount: '2 Pounds'
        },
        {
          id: 2,
          name: 'Salt',
          amount: '1 Tbs'
        }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe=>recipe.id !== id ))
  }
  return (
    <RecipeContext.Provider value = {recipeContextValue}>
      <RecipeList recipes={recipes}/>
    </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;
