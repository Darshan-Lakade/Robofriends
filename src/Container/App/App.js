import React, {Component} from 'react';
import './App.css';
import SearchList from '../../Components/SearchList/SearchList';
import CardList from '../../Components/CardList/CardList';

class App extends Component {

  constructor(){
    super()
    this.state = {
      Robots:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({Robots:json})
      })
  }

  onSearchChange = (e) => {
    this.setState({searchField:e.target.value})
  }

  render(){
      const filteredRobots = this.state.Robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
      })
    return (
      <div className="App">
        <h1 className="header">RoboFriends</h1>
        <SearchList onSearchChange={this.onSearchChange}/>
        <CardList Robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
