import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
     const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={195} />); 
     expect(wrapper).toMatchSnapshot();
 });

  test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={233534654646} />); 
    expect(wrapper).toMatchSnapshot();
}); 