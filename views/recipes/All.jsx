const React = require("react");
const DefaultLayout = require('../layout/Default');
class All extends React.Component {
  render() {
    const { recipes } = this.props;
    const dietaryRestrictions = [
      { name: 'Lactose Intolerant', field: 'lactoseIntolerant' },
      { name: 'Gluten Free', field: 'glutenFree' },
      { name: 'Vegetarian', field: 'vegetarian' },
      { name: 'Vegan', field: 'vegan' },
      { name: 'Kosher', field: 'kosher' },
      { name: 'Keto', field: 'keto' },
      { name: 'Diabetic Friendly', field: 'diabetic' },
      { name: 'Dairy Free', field: 'dairyFree' },
      { name: 'Low Carb', field: 'lowCarb' },
      { name: 'Nut Free', field: 'nutAllergy' },
      { name: 'Wheat Free', field: 'wheatFree' },
      { name: 'Fish & Shellfish Free', field: 'fishShellfishAllergy' },
      { name: 'Egg Free', field: 'eggAllergy' },
      { name: 'Soy Free', field: 'soyAllergy' }
    ];
    return (
      <DefaultLayout title={`Recipes Index Page`}>
        <ul className="bigList">
          {dietaryRestrictions.map((restriction, i) => {
            return (
              <ul className="recipeLists" key={i}>
                {restriction.name}
                <ul className="allRecipes">
                  {recipes.filter(recipe => recipe[restriction.field]).map((recipe, j) => {
                    return (
                      <li className="singleRecipe" key={j}>
                        <a href={`/recipes/${recipe.id}`}>{recipe.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </ul>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = All;