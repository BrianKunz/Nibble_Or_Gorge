const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const recipe = this.props.recipe;

    return (
      <DefaultLayout title={recipe.title}>
        <h5>Created by: {recipe.username}</h5>
        <br />
        <h4>Description:</h4>
          <div className="description">{recipe.description}</div>
          <div className="dualBoxes">
          <div className="ingredients">
            Ingredients:
            <br />
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="nutrition-info">
            Prep Time: {recipe.prepTime} mins
            <br />
            Cook Time: {recipe.cookTime} mins
            <br />
            Total Time: {recipe.totalTime} mins
            <br />
            Serving Size: {recipe.servingSize}
            <br />
            Calories: {recipe.calories} cal
            <br />
            Fat: {recipe.fat} g
            <br />
            Carbs: {recipe.carbs} g
            <br />
            Protein: {recipe.protein} g
          </div>
        </div>
        Directions:
        <div className="directions">{recipe.directions}</div>
        <br />
        <div className="nationality">{recipe.nationality}</div>
        <br />
        <div className="dietary-restrictions">
          {recipe.lactoseIntolerant ? `Lactose Intolerant Friendly ` : null} 
          {recipe.glutenFree ? `Gluten Free ` : null}
          {recipe.vegetarian ? `Vegetarian ` : null}
          {recipe.vegan ? `Vegan ` : null}
          {recipe.kosher ? `Kosher ` : null}
          {recipe.keto ? `Keto ` : null}
          {recipe.diabetic ? `Diabetic Friendly ` : null}
          {recipe.dairyFree ? `Dairy Free ` : null}
          {recipe.lowCarb ? `Low Carb ` : null}
          {recipe.nutAllergy ? `Nut Free ` : null}
          {recipe.wheatAllergy ? `Wheat Free ` : null}
          {recipe.fishShellfishAllergy ? `Fish / Shellfish Free ` : null}
          {recipe.eggAllergy ? `Egg Free ` : null}
          {recipe.soyAllergy ? `Soy Free ` : null}
        </div>
        <br />
        <form className="commentSection" action={`/recipes/${recipe._id}/comments`} method="POST">
            Write your comment here: <input type="text" name="body" />
            Rating: <input type="number" name="rating" />
            <input type="submit" name="" value="Post Comment" />
        </form>
        <br />
        Comments: 
        <div className="commentBox"> {
          recipe.comments.map(comment => {
            return (
              <div className="totalComment" key={comment._id}>
                <p className="commentRating">Rating: {comment.rating}</p>
                <p className="commentBody">{comment.body}</p>
                <p className="anon">Anonymous</p>
              </div>
              );
            })
          }
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;