import CounterDispatcher from './dispatcher';
import ActionTypes from './action-types';

export const increment = event => {
    const value = 1;
    CounterDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        payload: { value }
    });
};