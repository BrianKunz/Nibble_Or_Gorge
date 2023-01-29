const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Recipe Page">
        <form action="/recipes" method="POST">
          Title: <input type="text" name="title" />  
          <br />
          Description: <input type="text" name="description" />
          <br />
          Prep Time (mins): <input type="number" name="prepTime" />
          <br />
          Cook Time (mins): <input type="number" name="cookTime" />
          <br />
          Total Time (mins): <input type="number" name="totalTime" />
          <br />
          Serving Size: <input type="number" name="servingSize" />
          <br />
          Ingredients: <input type="array" name="ingredients" />
          <br />
          Directions: <input type="text" name="directions" />
          <br />
          Calories: <input type="number" name="calories" />
          <br />
          Fat: <input type="number" name="fat" />
          <br />
          Carbs: <input type="number" name="carbs" />
          <br />
          Protein: <input type="number" name="protein" />
          <br />
          Nationality: <input type="text" name="nationality" />
          <br />
          Lactose Intolerant Friendly: <input type="checkbox" name="lactoseIntolerant" /> 
          <br />
          Gluten Free: <input type="checkbox" name="glutenFree" /> 
          <br />
          Vegetarian: <input type="checkbox" name="vegetarian" /> 
          <br />
          Vegan: <input type="checkbox" name="vegan" /> 
          <br />
          Kosher: <input type="checkbox" name="kosher" /> 
          <br />
          Keto: <input type="checkbox" name="keto" /> 
          <br />
          Diabetic Friendly: <input type="checkbox" name="diabetic" /> 
          <br />
          Dairy Free: <input type="checkbox" name="dairyFree" /> 
          <br />
          Low Carb: <input type="checkbox" name="lowCarb" /> 
          <br />
          Nut Free: <input type="checkbox" name="nutAllergy" /> 
          <br />
          Wheat Free: <input type="checkbox" name="wheatAllergy" /> 
          <br />
          Fish & Shellfish Free: <input type="checkbox" name="fishShellfishAllergy" /> 
          <br />
          Egg Free: <input type="checkbox" name="eggAllergy" /> 
          <br />
          Soy Free: <input type="checkbox" name="soyAllergy" /> 
          <br />
          <input type="submit" name="" value="Create Recipe" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;