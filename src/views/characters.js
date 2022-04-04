import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

export default class characters extends React.Component {
    constructor(props) {
      super(props);
      this.state = { item: [] };
    }
  
    componentDidMount() {
      //api call
      fetch("http://hp-api.herokuapp.com/api/characters")
        .then((resp) => resp.json())
        .then((resp) => this.setState({ item: resp }));
    }
    render() {
  
      return (
        <div>
    
            {this.state.item.map((item) => (
             <ol key = { item.id } >
             Name: { item.name } 
             Alternatieve namen: { item.alternate_names }, 
             Species: { item.species },
             Gender: {item.gender},
             House: {item.house},
             Date of birth: {item.dateOfBirth},
             Year of birth: {item.yearOfBirth},
             Wizard: {item.wizard},
             Ancestry: {item.ancestry},
             Eye colour: {item.eyeColour},
             Hair colour: {item.hairColour},
             Patronus: {item.patronus},
             Hogwarts student: {item.hogwartsStudent},
             Hogwarts Staff: {item.hogwartsStaff},
             Actor: {item.actor},
             Alternate actor: {item.alternate_actor},
             Alive: {item.alive},
             Image: {item.image};
               </ol>
            ))}
        </div>
      );
    }
}
