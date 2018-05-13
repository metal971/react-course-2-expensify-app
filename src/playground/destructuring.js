const person =  {
    name: 'Jack',
    age: '28',
    location: {
        city: 'Boulogne-Billancourt',
        temp: 25
    }
};
// const name = person.name;
// const age = person.age;
const {name: firstname = 'Anonymous', age } = person;
console.log(`${firstname} is ${age}`);

// if (person.location.city && person.location.temp) {
//     console.log(`It is ${person.location.temp} in ${person.location.city}.`);
// }
//JS6 Format
//rename of temp
//valeur de name par defaut
const {city, temp:temperature} = person.location;
 if (city && temperature) {
     console.log(`It is ${temperature} in ${city}.`);
 }

 const book = {
     title: 'Ego is the Enemy',
     author: 'Ryan  Holiday',
     publisher: {
         name: 'Penguin'
     }
 };
const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

//destructuring an Array
const adress = ['65 rue Yves Kermen','Boulogne-Billancourt','France','92100'];
const [rue, ville = 'Paris',etat, codeP] = adress; // ville par défault paris
console.log(`You are in ${rue} ${ville}.`);

//Si on veut que la ville par example : 
//const [, ville = 'Paris'] = adress;

//Challenge
const item = ['Coffee (hot)', '$2.00', '2.50', '2.75'];
const [CoffeeName,,mediumPrice] = item;

console.log(`A medium ${CoffeeName} costs ${mediumPrice}.`);