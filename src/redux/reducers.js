import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import formReducer from '../Components/Form/redux/reducer';

const App = combineReducers({
    example: defaultReducer,
    form: formReducer
});

export default App;