import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

const StyledButton = styled.button`
            background-color: ${props => props.alt ? 'red' : 'green'};
            color: white;
            font: inherit;
            border: 1px solid blue;
            padding: 8px;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
                color: black;
            }
`;

class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }

static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
}

    state = {
        persons: [
            { id: 'first', name: 'Swathi', age: 24 },
            { id: 'second', name: 'Krishna', age: 18 },
            { id: 'third', name: 'Gautami', age: 25 }
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // console.log("Clicked!!");
        this.setState({
            persons: [
                { name: 'Swathi', age: 24 },
                { name: newName, age: 24 },
                { name: 'Gautami', age: 25 }
            ]
        })
    };

    componentWillMount(){
          console.log('[App.js] componentWillMount');  
    }

    componentDidMount(){
        console.log('[App.js] componentdidMount');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
    };


    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }


    render() {
        console.log('[App.js render');
        const myStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = 
                    <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />;
                 
                // <div>
                //     <Person
                //         name={this.state.persons[0].name}
                //         age={this.state.persons[0].age}
                //         clicked={this.switchNameHandler.bind(this, 'Ramya')}
                //         changed={this.nameChangedHandler}>
                //         My hobbies are singing and cooking</Person>
                //     <Person
                //         name={this.state.persons[1].name}
                //         age={this.state.persons[1].age} />
                //     <Person
                //         name={this.state.persons[2].name}
                //         age={this.state.persons[2].age} />
                // </div>

         
            myStyle.backgroundColor = 'red';
            myStyle[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }


        return (
            // Styleroot is for safely accessing css styles without error
            // <StyleRoot>
            <div className={classes.App} >
                <Cockpit 
                    persons = {this.state.persons}
                    showPersons = {this.state.showPersons}
                    clicked={this.togglePersonHandler}/>
                {persons}
            </div>
            /* </StyleRoot> */
        );
    }

}

export default App;
