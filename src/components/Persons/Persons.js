import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props,state){
        console.log('[Person.js] getDerivedStateFromProps', props);
        return state;
    }

// componentWillReceiveProps(props){
//     console.log('[Person.js] componentWillReceiveProps', props)
// }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    // componentWillUpdate(){

    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {message:"snapshot!"};
    }

componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Person.js] componentDidUpdate');
    console.log(snapshot);
}

    render() {
        return (
            this.props.persons.map((person, index) => {
                console.log('[Person.js] rendering...');
                return (
                    <Person clicked={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}></Person>
                )
            })

        );
    }

}
export default Persons;