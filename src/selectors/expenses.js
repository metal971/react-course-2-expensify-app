import moment from 'moment';

// Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true; 
        // figure out if the text description as the textvariable string inside of it ?
        // use includes method (Search in google Javascript includes)
        //convert both strings to lower case
        
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
        //sort by date - with most recent date coming first
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        // sort by amount - with a geater amount first
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        };
    });
};