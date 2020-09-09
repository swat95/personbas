import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        setTimeout(()=>{
            alert('Saevd data to cloud!');
        },1000);
    }, [props.persons]);

    const assignedClasses = [];
    let btnclass='';

    if(props.showPersons){
         btnclass=classes.Red;
    }
 

    if (props.persons.length <= 2) {
        assignedClasses.push('classes.red'); //assignedClasses='red'
    }

    if (props.persons.length <= 1) {
        assignedClasses.push('classes.bold'); //assignedClasses='bold'
    }

    return (
        <div className={classes.Cockpit}>
            <h3>Hi I am react app!!!</h3>
            <p className={assignedClasses.join(' ')}>It is working!!</p>
            <button 
                onClick={props.clicked} 
                className={btnclass}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;