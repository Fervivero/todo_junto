import { Component } from "react";

class Person extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props

        const aumentarEdad = () => {
            this.setAge({age: this.setAge + 1 });
        }

        return (
            <div className="person">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button type="button" className="btn btn-success " onClick={aumentarEdad}> Birthday Button for {firstName} {lastName} </button>
            </div>



        );
    }
}

export default Person;
