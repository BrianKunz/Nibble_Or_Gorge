const React = require("react");
const DefaultLayout = require("../layout/Default");

class Login extends React.Component {
    render() {
        return (
            <DefaultLayout cssPath="/css/app.css">
            <div className="imgContainer">
                <img src="https://i.imgur.com/KXJpXYX.jpg" />
            </div>
            <nav className="formContainer">
                <h1>Login</h1>
                <form action="/user/login" method="POST">
                    Username: <input type="text" defaultValue="" name="username" required />
                    Password:{" "}
                    <input type="password" defaultValue="" name="password" required />
                    <input type="submit" name="" value="Login" />
                    <a className="button" href="/user/signup">Sign Up</a>
                </form>
            </nav>
        </DefaultLayout>
        );
    }
};

module.exports = Login;
