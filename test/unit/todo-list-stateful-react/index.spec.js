import TodoListStateful from '../../../src/todo-list-stateful-react';

import React from 'react';
import {shallow} from 'enzyme';

import Chance from 'chance';
import {expect} from 'chai';

describe('Todo List Stateful', () => {
    let renderedElement,
        chance;

    function renderComponent() {
        const componentElement = <TodoListStateful />;

        renderedElement = shallow(componentElement);
    }

    beforeEach(() => {
        chance = new Chance();

        renderComponent();
    });

    it('should have a root DOM element', () => {
        expect(renderedElement).to.have.tagName('div');
    });
});
