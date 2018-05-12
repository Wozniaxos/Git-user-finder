import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './Components/UsersList.js';
import './fontello/css/fontello.css';


class App extends Component {
    
    checkKeyCode(event){
        this.setState({
            keyboardCode: event.keyCode
        })
    }
    
    
  constructor(){
      
      super();
   
      this.state={
          filter: "",
          keyboardCode: ""
      }   
  }
    
 SetFilterValue(event){
     this.setState({
         filter: event.target.value,
     })
 }
    
    
  render() {
    return (
      <div className="App">
        <form>
            <input ref="input" onKeyDown={this.checkKeyCode.bind(this)} className = "input" type = "text" placeholder = "type a github username" value= {this.state.filter} onChange={this.SetFilterValue.bind(this)}/>
        </form>
        <UsersList filter={this.state.filter} input={this.refs.input} keyboardCode={this.state.keyboardCode}/>
      </div>
    );
  }
}

export default App;
