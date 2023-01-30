const React = require("react");

class Comments extends React.Component {
    render() {
        return(
            <div>
                <form action="/recipe/comment" method="POST">
                    <input type="text" name="body" />
                    <input type="number" name="rating" />
                    <input type="submit" name="" value="Post Comment" />
                </form>
            </div>
        )
    }
}

module.exports = Comments;