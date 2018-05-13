import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
    const action1 = removeExpense({ id: '123abc' });
    expect(action1).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action2 = editExpense('123abc', { note: 'New note value' });
    expect(action2).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    });
});

test('should setup expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was the last rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const expenseDataEmpty = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const action = addExpense(expenseDataEmpty);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDataEmpty,
            id: expect.any(String)
        }
    });
});
