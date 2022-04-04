import React from 'react';
import "./App.css";


export default class App extends React.Component {
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
      <div className='nav'>
      <ul>
          <a>Gryffindor</a>
          <a>Slytherin</a>
          <a>Hufflepuf</a>
          <a>Ravenclaw</a>
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
             
          ))}
      </div> </div>
    );
  }
}
