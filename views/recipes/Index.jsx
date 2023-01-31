const React = require("react");
const DefaultLayout = require('../layout/Default');
class Index extends React.Component {
  render() {
    const { recipes } = this.props;
    return (
      <DefaultLayout title={`Recipes Index Page`}>
        <nav>
          <a href="/recipes/new">Add a New Recipe</a>
          <br />
          <a href="/recipes/all">View All</a>
          <br />
          <a href="/user/logout">Logout</a>
        </nav>
        <ul>
          {this.props.recipes.map((recipe, i) => {
            return (
              <li key={i}>
                <a href={`/recipes/${recipe.id}`}> {recipe.title}</a>
                <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST"><input type="submit" value="DELETE" /></form>
                <form action={`/recipes/${recipe._id}/edit`} method="GET"><input type="submit" value="UPDATE" /></form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
