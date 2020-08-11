import React from 'react';
import { shallow, mount } from 'enzyme';
import PersonInfo from './info';

describe('PersonInfo component', () => {
    const selectedPerson = {
        firstNameLastName: 'Luke Skywalker',
        jobTitle: 'Galaxy Saviour',
        emailAddress: 'luke@skywalker.com',
        selected: true,
        id: '1'
    };
    const unselectedPerson = {
        firstNameLastName: 'Darth Vader',
        jobTitle: 'Bad Guy',
        emailAddress: 'anakin@skywalker.com',
        selected: false,
        id: '2'
    };

    it('renders properly', () => {
       const infoComponent = shallow(<PersonInfo data={unselectedPerson} />);

       expect(infoComponent.containsMatchingElement(<div className="firstNameLastName">{unselectedPerson.firstNameLastName}</div>)).toEqual(true);
       expect(infoComponent.containsMatchingElement(<div className="jobTitle">{unselectedPerson.jobTitle}</div>)).toEqual(true);
       expect(infoComponent.containsMatchingElement(<div className="emailAddress">{unselectedPerson.emailAddress}</div>)).toEqual(true);
    });

    it('has \'selected\' class when displaying selected person', () => {
        const infoComponent = shallow(<PersonInfo data={selectedPerson} />);

        expect(infoComponent.hasClass('selected')).toEqual(true);
    });

    it('calls \'onClick\' prop function when clicked', () => {
        const onClickHandler = jest.fn();
        const infoComponent = mount(<PersonInfo data={selectedPerson} onClick={onClickHandler} />);

        infoComponent.simulate('click');
        expect(onClickHandler).toHaveBeenCalled();
        expect(onClickHandler).toHaveBeenCalledWith('1');
    });

    it('does not break when clicked and no click handler is present', () => {
        const infoComponent = mount(<PersonInfo data={selectedPerson} />);

        expect(() => {
            infoComponent.simulate('click');
        }).not.toThrow();
    });
});


