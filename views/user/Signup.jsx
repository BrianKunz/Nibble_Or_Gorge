const React = require("react");

class Signup extends React.Component {
    render() {
        return (
            <div>
                <h1>Signup</h1>

                <form action="/user/signup" method="POST">
                    Username: <input type="text" defaultValue="" name="username" required />
                    Email: <input type="text" defaultValue="" name="email" required />
                    Password:{" "}
                    <input type="password" defaultValue="" name="password" required />
                    <input type="submit" name="" value="Signup" />
                </form>
            </div>
        )
    }
}

module.exports = Signup;