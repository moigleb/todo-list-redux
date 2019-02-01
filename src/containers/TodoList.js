import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import { toggleTodo } from './redux/actions/index';
import { getTodos } from '../utils/filter';

const TodoList = ({todos, toggleTodo}) =>{
  if(todos.length > 0) {
    return  <ul className="list-wrap">
      {todos.map(todo => (
        <Todo key={todo.text + Date.now()} {...todo} onClick={()=>toggleTodo(todo.id)} />
      ))}
    </ul>;
  } return <ul className="list-wrap">
    <li>There is noting todo :))</li>
  </ul>;

}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  todos: getTodos(state.todosReducers, state.filterReducer)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);