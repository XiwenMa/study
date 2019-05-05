import React from 'react';
// import Radium from 'radium';

import './Person.css';

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        <div className="Person">
            <p onClick={props.click}>I'm { props.name }, a { props.age } years old Person!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )

};

export default person;