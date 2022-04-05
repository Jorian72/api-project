import React from 'react';
import "./App.css";
import characters from './views/characters';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
  }
  
 
  houseFilter = house => () => {
    console.log(house);
    fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ item: resp }));
  }
  componentDidMount() {
    //api call
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((resp) => resp.json())
      .then((resp) => this.setState({ item: resp }));
  }
  render() {
    
    return (
      <div className='nav'>
      <ul>
          <a value="Gryffindor" onClick={this.houseFilter("Gryffindor")}>Gryffindor</a>
          <a value="Slytherin" onClick={this.houseFilter("Slytherin")}>Slytherin</a>
          <a value="Hufflepuff" onClick={this.houseFilter("Hufflepuff")}>Hufflepuff</a>
          <a value="Ravenclaw" onClick={this.houseFilter("Ravenclaw")}>Ravenclaw</a>
            </ul>
 
      <div className='grid-container'>
    

          {this.state.item.map((item) => (
           <ol key = { item.id } >
          <li> { item.name }</li>
           <li>Gender: {item.gender}</li> 
           <li>{item.house} </li>
           <li>Date of birth: {item.dateOfBirth} </li>
          <li>{item.ancestry} </li>
            <li>Patronus: {item.patronus} </li>
             <li>Actor: {item.actor}</li>
             <img className='image' src={item.image}></img> 
             </ol>
             
          ))}</div>
      </div> 
    );
  }
}
