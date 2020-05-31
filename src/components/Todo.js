import React ,{component, Component} from 'react';
import Todoitem from './todoitem';
import PropTypes from 'prop-types'

class Todo extends Component {
 
 render(){
        return this.props.todo.map((todo)=>(
            <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}
            />
        ));
 }
}


//PropTypes
Todo.propTypes={
    todo:PropTypes.array.isRequired
}
export default Todo;
