import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterTodos } from '../containers/redux/actions';

const BaseButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
  >
    {children}
  </button>
)

BaseButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filterReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(filterTodos(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseButton)