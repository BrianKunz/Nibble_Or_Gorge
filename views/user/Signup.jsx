const React = require("react");
const DefaultLayout = require("../layout/Default");

class Signup extends React.Component {
    render() {
        return (
            <DefaultLayout cssPath="/css/app.css">
                <div className="imgContainer">
                    <img src="https://i.imgur.com/gHg3feq.jpg" />
                </div>
                <nav className="formContainer">
                    <h1>Signup</h1>
                    <form action="/user/signup" method="POST">
                        Username: <input type="text" defaultValue="" name="username" required />
                        Email: <input type="text" defaultValue="" name="email" required />
                        Password:{" "}
                        <input type="password" defaultValue="" name="password" required />
                        <input type="submit" name="" value="Signup" />
                    </form>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Signup;