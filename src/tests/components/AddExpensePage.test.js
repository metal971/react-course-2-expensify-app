import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});


test('should render AddExpensePage', () => {    
    expect(toJson(wrapper)).toMatchSnapshot();
}); 

test('should handle onSubmit', () => {    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
    expect(toJson(wrapper)).toMatchSnapshot();
}); 