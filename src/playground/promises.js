const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Jack',
            age: '58'
        })
        reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('does this run ?');
}).catch((error) => {
    console.log('error : ', error);
});

console.log('after');