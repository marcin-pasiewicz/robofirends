import * as reducers from './reducers';
import {
    CHANGE_SEARCH_FILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

describe('search robots reducers test', () => {
    const initialStateSearch = {
        searchField: '',
    };

    it('should set search initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
    });

    it('should CHANGE_SEARCH_FILED', () => {
        const action = {
            type: CHANGE_SEARCH_FILED,
            payload: 'foo'
        };
        expect(reducers.searchRobots(initialStateSearch, action)).toEqual({
            searchField: 'foo'
        })
    });
});

describe('request robots reducers test', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: '',
    };

    it('should set search initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    });

    it('should REQUEST_ROBOTS_PENDING', () => {
        const action = {
            type: REQUEST_ROBOTS_PENDING,
        };
        expect(reducers.requestRobots({}, action)).toEqual({
            isPending: true
        })
    });
    it('should REQUEST_ROBOTS_SUCCESS', () => {
        const action = {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                }
            ]
        };
        expect(reducers.requestRobots({}, action)).toEqual({
            isPending: false,
            robots: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                }
            ]
        })
    });
    it('should REQUEST_ROBOTS_FAILED', () => {
        const action = {
            type: REQUEST_ROBOTS_FAILED,
            error: 'error'
        };
        expect(reducers.requestRobots({}, action)).toEqual({
            isPending: false,
            error: 'error'
        })
    })
});
