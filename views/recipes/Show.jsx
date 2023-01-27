const React = require("react");

class Show extends React.Component {
  render() {
    const recipe = this.props.recipe;

    return (
      <div>
        <nav>
          <a href="/recipes">Back</a>
        </nav>
        {recipe.title}
        <br />
        {recipe.description}
        <br />
        {recipe.prepTime}
        <br />
        {recipe.cookTime}
        <br />
        {recipe.totalTime}
        <br />
        {recipe.servingSize}
        <br />
        {recipe.ingredients}
        <br />
        {recipe.directions}
        <br />
        {recipe.calories}
        <br />
        {recipe.fat}
        <br />
        {recipe.carbs}
        <br />
        {recipe.protein}
        <br />
        {recipe.nationality}
        <br />
        {recipe.lactoseIntolerant ? `Lactose Intolerant Friendly` : null} 
        {recipe.glutenFree ? `Gluten Free` : null}
        {recipe.vegetarian ? `Vegetarian` : null}
        {recipe.vegan ? `Vegan` : null}
        {recipe.kosher ? `Kosher` : null}
        {recipe.keto ? `Keto` : null}
        {recipe.diabetic ? `Diabetic Friendly` : null}
        {recipe.dairyFree ? `Dairy Free` : null}
        {recipe.lowCarb ? `Low Carb` : null}
        {recipe.nutAllergy ? `Nut Free` : null}
        {recipe.wheatAllergy ? `Wheat Free` : null}
        {recipe.fishShellfishAllergy ? `Fish / Shellfish Free` : null}
        {recipe.eggAllergy ? `Egg Free` : null}
        {recipe.soyAllergy ? `Soy Free` : null}
        <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST"><input type="submit" value="DELETE" /></form>
        <form action={`/recipes/${recipe._id}/edit`} method="GET"><input type="submit" value="UPDATE" /></form>
      </div>
    );
  }
}

module.exports = Show;