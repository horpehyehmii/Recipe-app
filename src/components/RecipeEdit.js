import React, {useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import uuidv4 from 'uuid/v4'


export default function RecipeEdit({recipe}) {

const {handleRecipeEdit} = useContext(RecipeContext)

function handleChanges(changes){
  handleRecipeEdit(recipe.id, {...recipe, ...changes})
}

function handleIngredientEdit(id, editedIngred){
  const newIngred = [...recipe.ingredients]
  const index = newIngred.findIndex(i=> i.id === id)
  newIngred[index] = editedIngred
  handleChanges({ingredients: newIngred})
}

function handleIngredientAdd(){
  const newIngred = {
    id: uuidv4(),
    name: "",
    amount: ""
  }
  handleChanges({ingredients: [...recipe.ingredients, newIngred]})
}

function handleIngredientDelete(id){
  handleChanges({ingredients: recipe.ingredients.filter(i=>i.id !== id)})
}




  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label
          htmlFor="name"
          className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input" 
          value={recipe.name}
          onChange={e=>handleChanges({name:e.target.value})}/>
        <label
          htmlFor="cookTime"
          className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit__input"
          value={recipe.cookTime}
          onChange={e=>handleChanges({cookTime:e.target.value})} />
        <label
          htmlFor="servings"
          className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="recipe-edit__input" 
          value={recipe.servings}
          onChange={e=>handleChanges({servings:e.target.value} || "")}/>
        <label
          htmlFor="instructions"
          className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions"
          value={recipe.instructions}
          onChange={e=>handleChanges({instructions:e.target.value})}/>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient=>
          <RecipeIngredientEdit 
            key={ingredient} 
            ingredient={ingredient} 
            handleIngredientEdit={handleIngredientEdit}
            handleIngredientDelete={handleIngredientDelete}/>)}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button onClick={()=>handleIngredientAdd()} className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  )
}
