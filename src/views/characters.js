import React from 'react'
import { connect } from 'react-redux';


var characters = () =>(
    class App extends React.Component {
   
        // Constructor 
        constructor(props) {
            super(props);
       
            this.state = {
                items: [],
                DataisLoaded: false
            };
        }
       
        // ComponentDidMount is used to
        // execute the code 
        componentDidMount() {
            fetch(
      "http://hp-api.herokuapp.com/api/characters")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: json,
                        DataisLoaded: true
                    });
                })
        }
        render() {
            const { DataisLoaded, items } = this.state;
            if (!DataisLoaded) return <div>
                <h1> Pleases wait some time.... </h1> </div> ;
       
            return (
              
            <div className = "App">
                <h1>Harry Potter API </h1>  {
                    items.map((item) => ( 
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
                    ))
                }
            </div>
        );
      }
      }
)
export default characters