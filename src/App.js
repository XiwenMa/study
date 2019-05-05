import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';

import './App.css'; 
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asfd1', name: 'Steve', age: 28},
      {id: 'vree3', name: 'Mike', age: 31},
      {id: 'fewr2', name: 'Max', age:66}
    ],
    otherState: 'some other info.' ,
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("Was clicked");
  //   this.setState( {
  //     persons: [
  //       {name: newName, age: 30},
  //       {name: "Mike", age: 31},
  //       {name: "Max", age:66}
  //     ]
  //   } );
  // }

  nameChangedHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons}); 
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1 solid blue',
      padding: '8px',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                // changed={(event) => this.nameChangedHandler(event, person.id)}
                changed={this.nameChangedHandler.bind(this, person.id)} 
                />
            })}
            
          </div>
      );

      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push('red');
    } 
    if ( this.state.persons.length <= 1 ) {
      classes.push('bold');
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hello this is a React app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style}
          // onClick={ () => this.switchNameHandler("GOD") }>Switch Name
          onClick={this.togglePersonsHandler} >Switch Name
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

export default App;


// const [personsState, setPersonsState] = useState({
//   persons: [
//     {name: "Steve", age: 28},
//     {name: "Mike", age: 31},
//     {name: "Max", age:66}
//   ]
// });

// const [otherState, setOtherState] = useState("Some other states.");

// console.log(personsState, otherState);

// const switchNameHandler = () => {
//   setPersonsState({
//     persons: [
//       {name: "Foobar", age: 33},
//       {name: "Mike", age: 31},
//       {name: "Max", age:66}
//     ]
//   });
// }

// return (
//   <div className="App">
//     <h1>Hello this is a React app</h1>
//     <p>This is really working!</p>
//     <button onClick={ switchNameHandler }>Switch Name</button>
//     <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
//     <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>My hobby is chicken dinner.</Person>
//     <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }/>
//     <Person />

//   </div>
// );




// If else #1
// {
//   this.state.showPersons === true ? 
//     <div>
//       <Person 
//         name={ this.state.persons[0].name } 
//         age={ this.state.persons[0].age } />
//       <Person 
//         name={ this.state.persons[1].name } 
//         age={ this.state.persons[1].age }
//         click={ this.switchNameHandler.bind(this, "Oh my god") }
//         changed={ this.nameChangedHandler }>My hobby is chicken dinner.
//       </Person>
//       <Person 
//         name={ this.state.persons[2].name } 
//         age={ this.state.persons[2].age } />
//     </div> : null
// }