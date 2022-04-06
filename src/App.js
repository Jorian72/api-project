import React from 'react';
import "./App.css";
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
          <a value="Gryffindor" onClick={this.houseFilter("Gryffindor")}><img src={require('.//images/Gryffindor.png')} alt='Gryffindor'width="100" height="100"/></a>
          <a value="Slytherin" onClick={this.houseFilter("Slytherin")}><img src={require('.//images/slytherin.png')} alt='Slytherin' width="100" height="100"/></a>
          <a value="Hufflepuff" onClick={this.houseFilter("Hufflepuff")}><img src={require('.//images/Hufflepuff.png')} alt='Hufflepuff' width="100" height="100"/></a>
          <a value="Ravenclaw" onClick={this.houseFilter("Ravenclaw")}><img src= {require('.//images/ravenclaw.png')}alt='Ravenclaw' width="100" height="100"/></a>
            </ul>
 
      <div className='grid-container'>
    

          {this.state.item.map((item) => (
           <ol key = { item.id } >
             <img className='image' src={item.image}></img> 
          <li> { item.name }</li>
           <li>Gender: {item.gender}</li> 
           <li>{item.house} </li>
           <li>Date of birth: {item.dateOfBirth} </li>
          <li>{item.ancestry} </li>
            <li>Patronus: {item.patronus} </li>
             <li>Actor: {item.actor}</li>
             
             </ol>
             
          ))}</div>
      </div> 
    );
  }
}
