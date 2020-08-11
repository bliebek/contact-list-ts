import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import PersonList from './../person/list';

describe('App component', () => {
    it('renders list component on init', () => {
        const appComponent = shallow(<App />);

        expect(appComponent.containsMatchingElement(<PersonList />)).toEqual(true);
    });
});


