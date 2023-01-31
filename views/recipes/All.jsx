const React = require("react");
const DefaultLayout = require('../layout/Default');
class All extends React.Component {
  render() {
    const { recipes } = this.props;
    return (
      <DefaultLayout title={`Recipes Index Page`}>
        <nav>
            <a href="/recipes/">See Your Recipes</a>
            <br />
            <a href="/user/logout">Logout</a>
        </nav>
        <ul>
          {this.props.recipes.map((recipe, i) => {
            return (
              <li key={i}>
                <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = All;