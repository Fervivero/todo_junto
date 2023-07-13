import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        const { firstName, lastName, age, hairColor } = props;
        this.state = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            hairColor: hairColor
        }
    }

    aumentarEdad = () => {
        this.setState({age: this.state.age + 1 });
    }


    render() {
        return (
            <div className="person">
                <h1>{this.state.lastName}, {this.state.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button type="button" className="btn btn-success " onClick={this.aumentarEdad}> Birthday Button for {this.state.firstName} {this.state.lastName} </button>
                <hr></hr>
            </div>


        );
    }

    }

export default Person;
