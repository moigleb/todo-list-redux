import { combineReducers } from 'redux';
import todosReducers from '../../containers/redux/reducers/todosReducer';
import filterReducer from '../../containers/redux/reducers/filterReducer';

export default combineReducers({
  todosReducers,
  filterReducer
})