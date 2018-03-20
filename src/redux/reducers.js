import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';

const App = combineReducers({
    example: defaultReducer
});

export default App