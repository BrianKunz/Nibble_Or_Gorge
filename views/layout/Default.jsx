const React = require("react");

// Higher order component
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <div className="container">
          <header>
            <ul className="topmenubar">
              <li><a href="/recipes/all">View All</a></li>
              <li><a href="/recipes/">See Your Recipes</a></li>
              <li><a href="/recipes/new">Add a New Recipe</a></li>
              <li><a href="/user/logout">Logout</a></li>
            </ul>
          </header>
          <h1>{this.props.title}</h1>
          </div>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;