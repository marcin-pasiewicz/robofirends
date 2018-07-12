import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('renders without crashing', () => {
    expect(shallow(<SearchBox/>)).toMatchSnapshot();
});