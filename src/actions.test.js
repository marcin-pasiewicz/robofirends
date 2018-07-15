import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import {
    CHANGE_SEARCH_FILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

const mockStore  = configureMockStore([thunk]);

describe('setSearchField action test', () => {
    it('should create action setSearchField', () => {
        const text = 'foo';
        const expectedAction = {
            type: CHANGE_SEARCH_FILED,
            payload: text
        };
        expect(actions.setSearchField(text)).toEqual(expectedAction)

    })
});

describe('requestRobots action test', () => {
    it('should create action requestRobots', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING,
        };
        expect(action[0]).toEqual(expectedAction)
    })
});