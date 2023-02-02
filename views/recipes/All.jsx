const React = require("react");
const DefaultLayout = require('../layout/Default');
class All extends React.Component {
  render() {
    const { recipes } = this.props;
    return (
      <DefaultLayout title={`Recipes Index Page`}>
        <ul>
          {this.props.recipes.map((recipe, i) => {
            return (
              <li className="allRecipes" key={i}>
                <ul className="recipeLists">Lactose Intolerant
                  {recipe.lactoseIntolerant ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Gluten Free 
                  {recipe.glutenFree ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Vegetarian
                  {recipe.vegetarian ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Vegan 
                  {recipe.vegan ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Kosher 
                  {recipe.kosher ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Keto 
                  {recipe.keto ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Diabetic Friendly 
                  {recipe.diabetic ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Dairy Free
                  {recipe.dairyFree ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Low Carb
                  {recipe.lowCarb ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Nut Free
                  {recipe.nutAllergy ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Wheat Free
                  {recipe.nutAllergy ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Fish & Shellfish Free
                  {recipe.fishShellfishAllergy ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Egg Free
                  {recipe.eggAllergy ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
                <ul className="recipeLists">Soy Free
                  {recipe.soyAllergy ? <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>  : null} 
                </ul>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = All;