import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('renders without crashing', () => {
    const mockRobots = [{
        id: 1,
        name: 'John Snow',
        username: 'John John',
        email: 'john@wp.pl'
    }];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});