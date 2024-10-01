const user = {id: 1, name: 'Sohag', job: 'Web developer'};

// JSON: JavaScript Object Notation

const stringObject = JSON.stringify(user);

console.log(user);
console.log(stringObject);



const shop = {
    owner: 'Nure Alam',
    address: {
        street: 'Matlab Uttar',
        city: 'Chandpur',
        country: 'Bangladesh'
    },
    products: ['Urea', 'Tsp', 'Mop', 'Dap'],
    revenue: 70000,
    isOpen: true,
    isNew: false
}

console.log(shop);

const shopJSON = JSON.stringify(shop); //Js object to JSON Object
console.log(shopJSON);

const shopOBJ = JSON.parse(shopJSON);  // JSON Object to Js object
console.log(shopOBJ);