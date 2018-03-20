import initialState from './initialState';
import * as actionTypes from './actionTypes';

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DEFAULT_ACTION:
            const { foo } = action
            return Object.assign({}, ...state, foo);
    }

    return state;
}

export default defaultReducer