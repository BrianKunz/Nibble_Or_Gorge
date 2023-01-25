const React = require("react");

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <a href="/user/signup"><h3>SignUp</h3></a>

                <form action="/user/login" method="POST">
                    Email: <input type="text" defaultValue="" name="email" required />
                    Password:{" "}
                    <input type="password" defaultValue="" name="password" required />
                    <input type="submit" name="" value="Login" />
                </form>
            </div>
        );
    }
};

module.exports = Login;