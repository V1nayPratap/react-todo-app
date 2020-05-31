import React ,{component, Component} from 'react';
import PropTypes from 'prop-types'


class Todoitem extends Component {
    getStyle=()=>{
        return{
            textAlign:"left",
            background:"cyan",
            margin:"1px",
            padding:"10px",
            borderBottem:"1px #ccc dotted",
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

   
 render(){
     const {id,title}=this.props.todo
        return (
        <div style={this.getStyle()}>

            <p> <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}></button>
                </p>
        </div>
        )
 }
}
Todoitem.propTypes={
    todo:PropTypes.object.isRequired
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
export default Todoitem;
