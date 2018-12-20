import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import NameCard from './components/NameCard';
import TodoList from './components/TodoList';
import Cartoon from './components/Cartoon';
const tags = ['男神','傻逼']

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Hello></Hello>
        <NameCard name="Rain" number={1379896} isHuman tags={tags}/> */}
        {/* <TodoList> </TodoList> */}
        <Cartoon></Cartoon>
      </div>


    );
  }
}

export default App;
