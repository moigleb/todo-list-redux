import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../containers/redux/actions';
import './style.scss'

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.inputRef.current.value.trim()) {
      return
    }
    this.props.addTodo(this.inputRef.current.value);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input ref={this.inputRef}/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {addTodo})(AddTodo)