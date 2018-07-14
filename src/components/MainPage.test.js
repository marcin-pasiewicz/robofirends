import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };

    wrapper = shallow(<MainPage {...mockProps}/>);
});


it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot()
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name: 'John',
            email: 'john@wp.pl '
        }],
        searchField: 'john',
        isPending: false
    };
    const wrapper2 = shallow(<MainPage {...mockProps2}/>);
    expect(wrapper.instance().filteredRobots()).toEqual([]);
    expect(wrapper2.instance().filteredRobots()).toEqual(mockProps2.robots)
});