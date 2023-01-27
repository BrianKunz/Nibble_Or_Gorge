const React = require("react");

class Index extends React.Component {
  render() {
    const { recipes } = this.props;
    return (
      <div>
        <h1>Recipes Index Page</h1>
        <nav>
          <a href="/recipes/new">Add a New Recipe</a>
          <a href="/user/logout">
            <button classnName="logoutBtn">Lougout</button>
          </a>
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
      </div>
    );
  }
}

module.exports = Index;
