const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    const {title, _id, description, prepTime, cookTime, totalTime, servingSize, ingredients, directions, calories, fat, carbs, protein, nationality, lactoseIntolerant, glutenFree, vegetarian, vegan, kosher, keto, diabetic, dairyFree, lowCarb, nutAllergy, wheatAllergy, fishShellfishAllergy, eggAllergy, soyAllergy} = this.props.recipe;

    return (
      <DefaultLayout> 
        <h1>Edit Recipe page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action={`/recipes/${_id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={title} />
          <br />
          Description: <input type="text" name="description" defaultValue={description} />
          <br />
          Prep Time (mins): <input type="number" name="prepTime" defaultValue={prepTime}/>
          <br />
          Cook Time (mins): <input type="number" name="cookTime" defaultValue={cookTime}/>
          <br />
          Total Time (mins): <input type="number" name="totalTime" defaultValue={totalTime}/>
          <br />
          Serving Size: <input type="number" name="servingSize" defaultValue={servingSize}/>
          <br />
          Ingredients: <input type="array" name="ingredients" defaultValue={ingredients}/>
          <br />
          Directions: <input type="text" name="directions" defaultValue={directions}/>
          <br />
          Calories: <input type="number" name="calories" defaultValue={calories}/>
          <br />
          Fat: <input type="number" name="fat" defaultValue={fat}/>
          <br />
          Carbs: <input type="number" name="carbs" defaultValue={carbs}/>
          <br />
          Protein: <input type="number" name="protein" defaultValue={protein}/>
          <br />
          Nationality: <input type="text" name="nationality" defaultValue={nationality}/>
          <br />
          Lactose Intolerant Friendly: {lactoseIntolerant ? ( <input type="checkbox" name="lactoseIntolerant" defaultChecked /> ) : ( <input type="checkbox" name="lactoseIntolerant" />)} 
          <br />
          Gluten Free: {glutenFree ? ( <input type="checkbox" name="glutenFree" defaultChecked /> ) : ( <input type="checkbox" name="glutenFree" />)} 
          <br />
          Vegetarian: {vegetarian ? ( <input type="checkbox" name="vegetarian" defaultChecked /> ) : ( <input type="checkbox" name="vegetarian" />)} 
          <br />
          Vegan: {vegan ? ( <input type="checkbox" name="vegan" defaultChecked /> ) : ( <input type="checkbox" name="vegan" />)}  
          <br />
          Kosher: {kosher ? ( <input type="checkbox" name="kosher" defaultChecked /> ) : ( <input type="checkbox" name="kosher" />)}   
          <br />
          Keto: {keto ? ( <input type="checkbox" name="keto" defaultChecked /> ) : ( <input type="checkbox" name="keto" />)}  
          <br />
          Diabetic Friendly: {diabetic ? ( <input type="checkbox" name="diabetic" defaultChecked /> ) : ( <input type="checkbox" name="diabetic" />)}  
          <br />
          Dairy Free: {dairyFree ? ( <input type="checkbox" name="dairyFree" defaultChecked /> ) : ( <input type="checkbox" name="dairyFree" />)}  
          <br />
          Low Carb: {lowCarb ? ( <input type="checkbox" name="lowCarb" defaultChecked /> ) : ( <input type="checkbox" name="lowCarb" />)}  
          <br />
          Nut Free: {nutAllergy ? ( <input type="checkbox" name="nutAllergy" defaultChecked /> ) : ( <input type="checkbox" name="nutAllergy" />)}  
          <br />
          Wheat Free: {wheatAllergy ? ( <input type="checkbox" name="wheatAllergy" defaultChecked /> ) : ( <input type="checkbox" name="wheatAllergy" />)}   
          <br />
          Fish & Shellfish Free: {fishShellfishAllergy ? ( <input type="checkbox" name="fishShellfishAllergy" defaultChecked /> ) : ( <input type="checkbox" name="fishShellfishAllergy" />)}  
          <br />
          Egg Free: {eggAllergy ? ( <input type="checkbox" name="eggAllergy" defaultChecked /> ) : ( <input type="checkbox" name="eggAllergy" />)}  
          <br />
          Soy Free: {soyAllergy ? ( <input type="checkbox" name="soyAllergy" defaultChecked /> ) : ( <input type="checkbox" name="soyAllergy" />)}  
          <br />
          <input type="submit" name="" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;