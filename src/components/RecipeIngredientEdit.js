import React from 'react'


export default function RecipeIngredientEdit({ingredient, handleIngredientEdit, handleIngredientDelete}) {

  function handleChanges(changes){
    handleIngredientEdit(ingredient.id, {...ingredient, ...changes})
  }
  return (
    <>
      <input className="recipe-edit__input" type="text" value={ingredient.name} onChange={e=>handleChanges({name:e.target.value})}/>
      <input className="recipe-edit__input" type="text" value={ingredient.amount} onChange={e=>handleChanges({amount:e.target.value})}/>
      <button className="btn btn--danger" onClick={()=>handleIngredientDelete(ingredient.id)}>&times;</button>
    </>
  )
}
