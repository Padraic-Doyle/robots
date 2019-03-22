import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import '../Containers/App.css';
import Scroll from '../Components/Scroll.js';




class App extends Component  {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

  onSearchChange =(event) => {
      this.setState({searchfield:event.target.value})
   
    
   
  }


 render(){
    const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return(
        <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <Cardlist robots={filteredRobots}/>
        </Scroll>
        </div>
    );
    }
}
export default App;