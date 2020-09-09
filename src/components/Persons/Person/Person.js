import React, { Component } from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
import classes from './Person.module.css';

const StyledDiv = styled.div`
             width: 60%;
             margin: 16px auto;
             padding : 6px;
             text-align: center;
             box-shadow: 0 2px 3px #ccf;
             cursor: pointer;
             
             '@media(min-width: 500px) {
                    width: 450px;
             })
`;

class Person extends Component {
    // const mystyle = {
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                {/* <StyledDiv>  */}
                <p onClick={this.props.clicked} > I am {this.props.name} and {this.props.age} years old!!</p >
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
            //  </StyledDiv>
        );
    }

};

export default Person;