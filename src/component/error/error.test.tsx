import React from 'react';
import { shallow } from 'enzyme';
import Error from './error';

describe('Error component', () => {
    it('displays unchanged message', () => {
        const errorMsg = 'Error occured!';
        const errorComponent = shallow(<Error msg={errorMsg} />);

        expect(errorComponent.text()).toEqual(errorMsg);
    });
});


