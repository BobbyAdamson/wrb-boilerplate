import * as DefaultActions from './actionTypes';

export function fireAction() {
    return {
        type: DefaultActions.DEFAULT_ACTION,
        foo: 'bar'
    }
}