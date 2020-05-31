import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todo';
import './App.css';
import PropTypes from 'prop-types'
import Header from './components/layout/header'
import AddTodo from './components/addTodo'
import About from './components/pages/about'
import {v4 as uuid} from 'uuid'

class App extends Component {
  state = {
    todo:[
      {
      id:uuid(),
      title:'Take out the trash',
      completed:false 
    },
    {
      id:uuid(),
      title:'Meeting with wife',
      completed:false
    },
    {
      id:uuid(), 
      title:'Dinner with friend',
      completed:false
    }
  ]
}
//toogle complete
markComplete=(id)=>{
  this.setState({todo:this.state.todo.map(todo=>{
    if(todo.id==id)
      todo.completed=!todo.completed
      return todo
  })
})
}
//delete todo
delTodo=(id)=>{
  this.setState({todo:[...this.state.todo.filter(todo=>todo.id!==id)]})
}
//add Todo
addTodo=(title)=>{
  const newTodo={
    id:uuid(),
    title:title,
    completed:false
  }
  this.setState({todo:[...this.state.todo,newTodo]})
}
  render(){
  return (       <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todo
                todo={this.state.todo}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
      </div>
    </div>
  </Router>
);
 }
}

export default App;
