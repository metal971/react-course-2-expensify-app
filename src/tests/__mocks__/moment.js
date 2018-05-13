// Pour ne pas appeler une fonction qui s'appelle ensuite ...
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};