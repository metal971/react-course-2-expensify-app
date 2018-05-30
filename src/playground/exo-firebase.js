/* database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    }); */

// child_removed
/* database.ref('expenses')
.on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})
 */
// child_changed
/* database.ref('expenses')
.on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}) */

// child_added
/* database.ref('expenses')
.on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})
 */
/* const onValueChange = database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    }, (e) => {
        console.log('Error with data fetching', e);
    }); */

/* database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    }); */


/* database.ref('notes').push({
    title: 'Course Topics',
    body: 'React Native, Angular, Python'
}); */

//Challenge : setup "expenses" with three itms (description, note, amount, createdAt)

/* database.ref('expenses').push(
    {
        description: 'Nice Travel Bill',
        note: 'Nice Courses',
        amount: 200000,
        createdAt: 1122584
    }
); */









/*======================  EXERCICE ==============================*/

//Récupérer une seule fois toutes les données à la racine : once
/*database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch(() => {
        console.log('Error fetching data', e);
    });*/

// Methode pour acceder plusieurs fois à la database : on
/* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref('age').set(35);
}, 3500);

setTimeout(() => {
    database.ref('age').off('child_added', onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(45);
}, 10000); */

// Challenge avec on
/*  const onValueChange = database.ref().on('value', (snapshot) => {
    const data =  snapshot.val();    
    console.log(`${data.name}  is a ${data.job.title} at ${data.job.company}`);
}, (e) => {
    console.log('Error with data fetching', e);
}); */

/*database.ref().set({
    name: 'Jack Pierre-Marie',
    age: 40,
    isSingle: false,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Boulogne-Billancourt',
        country: 'France'
    }
}).then(() => {
    console.log('Data is saved ! ');
}).catch((e) => {
    console.log('this failed', e);
});*/


// passing null value for remove data
//database.ref('isSingle').set(null);


//  
/*database.ref()
 .remove()  
 .then(function() {
   console.log("Remove succeeded.")
 })
 .catch(function(error) {
   console.log("Remove failed: " + error.message)
 }); */

//   database.ref().update({
//       name: 'Sédrick',
//       age: 36,
//       job: 'Software developer',
//       isSingle:null
//   });

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Pointe-a-Pitre'
// });

/* database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seatle'
}); */