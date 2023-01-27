const React = require("react");

class Signup extends React.Component {
    render() {
        return (
            <div>
                <h1>Signup</h1>

                <form action="/user/signup" method="POST">
                    Email: <input type="text" defaultValue="" name="email" required />
                    Password:{" "}
                    <input type="password" defaultValue="" name="password" required />
                    Lactose Intolerant: <input type="checkbox" name="lactoseIntolerant" />
                    Gluten Free: <input type="checkbox" name="lactoseIntolerant" />
                    Vegetarian: <input type="checkbox" name="lactoseIntolerant" />
                    Vegan: <input type="checkbox" name="lactoseIntolerant" />
                    Kosher: <input type="checkbox" name="lactoseIntolerant" />
                    Keto: <input type="checkbox" name="lactoseIntolerant" />
                    Diabetic: <input type="checkbox" name="lactoseIntolerant" />
                    Dairy Free: <input type="checkbox" name="lactoseIntolerant" />
                    Low Carb: <input type="checkbox" name="lactoseIntolerant" />
                    Nut Allergy: <input type="checkbox" name="lactoseIntolerant" />
                    Wheat Allergy: <input type="checkbox" name="lactoseIntolerant" />
                    Fish / Shellfish Allergy: <input type="checkbox" name="lactoseIntolerant" />
                    Egg Allergy: <input type="checkbox" name="lactoseIntolerant" />
                    Soy Allergy: <input type="checkbox" name="lactoseIntolerant" />
                    <input type="submit" name="" value="Signup" />
                </form>
            </div>
        )
    }
}

module.exports = Signup;