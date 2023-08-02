/* 'use strict'; */


/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D'); */


//const interface = 'Audio';




/* function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger(); */

/* function fruitJuice (apple, orange) {
    console.log(apple, orange);
    const juice = `Juice with ${apple} apples and ${orange} oranges:`;
    return juice;
}

const appleJuice = fruitJuice(5, 8);
console.log(appleJuice);




function discribeCountry(country, population, capitalCity) {
    console.log(country, population, capitalCity);
    const populationCity = `${country} has ${population} million people and its capital city is ${capitalCity}:`;
    return populationCity
}

const cityPopulation = discribeCountry('Finland', 6, 'Helsinki');
console.log(cityPopulation); */


/* function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);
console.log(age1);


const calcAge2 = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age2 = calcAge2(1991);
console.log(age1, age2);  */


// Arrow function
//1
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUnitilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement
    return `${firstName} retires in ${retirement} years`; 
}


//2
console.log(yearsUnitilRetirement(1991, 'Jonas'));
console.log(yearsUnitilRetirement(1980, 'Bob'));

const yearsLegal  = (birthYear1, firstName1) => {
    const age1 = 2022 - birthYear1;
    const adultAge = 18 - age1;
    return `Till the adult age of ${firstName1} have ${adultAge} years:`;
}

console.log(yearsLegal(2012, 'Jonik')); */


// Function calling other functions.

/* function cutFruitePices(fruit) {
    return fruit * 4;
}



function fruitProccessor(apples, oranges) {
    const applePieces = cutFruitePices(apples);
    const orangePieces = cutFruitePices(oranges);


    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges: `;
    return  juice;
}

console.log(fruitProccessor(2, 3)); 
 */

/* 
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}



const yearsUnitilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}

console.log(yearsUnitilRetirement(1991, 'Jonas'));
console.log(yearsUnitilRetirement(1970, 'Mike')); */

/* function calcAverage1(score1, score2, score3){
    const Average1team = (score1 + score2 +score3) / 3;
    return Average1team;
}

const firstTeam = calcAverage1(44, 23, 71);
console.log(firstTeam);


function calcAverage2(score1, score2, score3){
    const Average2team = (score1 + score2 +score3) / 3;
    return Average2team;
}

const secondTeam = calcAverage1(65, 54, 49);
console.log(secondTeam);


    if(firstTeam > secondTeam) {
        console.log(`Delphins have ${firstTeam} score, therefore Delphins are the winner:`);
    } else if(secondTeam > firstTeam){
        console.log(`Koalas have ${secondTeam} score, therefore Koalas are the winner:`);
    } else {
        console.log(`undefined`);
    }

 */

/* const freind1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 2]);


friends[2] = 'Jay';
console.log(friends);


const years = Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(years.length);
console.log(years[years.length - 2]);

years[2] = 'Sergey';
console.log(years); */



//Exercise

/* const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];



const age1 = calcAge(years[0]); 
const age2 = calcAge(years[1]); 
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); */

/* 
const friends = ['Michael', 'Steven', 'Peter'];
// Add elements.

const newLength = friends.push('Jay');  
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements

friends.pop(); //Last

console.log(friends); 


friends.shift();
console.log(friends);

//

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends);
console.log(friends.includes(23));

if(friends.includes('Peter')) {
    console.log('You have a friend called Peter');
} */

/* function calcTip(bill){
    if(bill > 50 && bill < 300){
        const newBill = bill * 1.15;
        console.log(newBill); 
    } else {
        const newBill = bill * 1.2;
        console.log(newBill);
    }
    
}
console.log(calcTip(100));

const bills = [125, 555, 44];

const bills1 = calcTip(bills[0]);
const bills2 = calcTip(bills[1]);
const bills3 = calcTip(bills[2]);
console.log(bills1, bills2, bills3);

const totalbills = (calcTip(bills[0]) + calcTip(bills[1]) + calcTip(bills[2]));
console.log(totalbills); */


/* const jonas = {
     firstName: 'Jonas',
     lastName: 'Schmedtmann',
     age: 2037 - 1991,
     job: 'teacher',
     friends: ['Michael', 'Peter', 'Steven']
}; 

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName, lastName, age, job, and friends:');

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);


if (jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request ! Choose between firstName, lastName, age, job, and friends: ')
}



console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]};`)

console.log(jonas.job); */

/* 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    /* calcAge: function(birthYear) {
        //console.log(this)
        return 2037 - this.birthYear;
    } */

   /*  calcAge: function(birthYear) {
        this.age = 2037 - this.birthYear;
        return this.age; 
    },
    
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license `
    }


}; 

console.log(jonas.calcAge());

console.log(jonas.age);

console.log(jonas.getSummary()); */


/* 
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(BMI1){
        this.BMI1 = this.mass / this.height ** 2;
        return this.BMI1;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(BMI2) {
        this.BMI2 = this.mass / this.height ** 2;
        return this.BMI2;
    }
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.firstName} BMI (${mark.BMI1}) is higher than ${john.firstName}'s (${john.BMI2}:)`);
} else {
    console.log(`${john.firstName} BMI (${john.BMI2}) is higher than ${mark.firstName}'s (${mark.BMI1}:)`);
} */


/* console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');
 */



// Loops

/* for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
 */

// Loops through Arrays
// 1
/* const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]; 

const types = [];


for(let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);


// 2
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);


// continue and break
console.log('===Only String===');
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;


    console.log(jonas[i], typeof jonas[i]);
}


console.log('===Break with Number===');
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;


    console.log(jonas[i], typeof jonas[i]);
} */

 
/* const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]; 

 for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}



for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------------Starting exercise ${exercise}`);

    for(let rep = 1; rep <=5; rep++){
        console.log(`Lifting weight repetition ${rep}`)
    }
}
 */


/* for(let rep = 1; rep <=10; rep++){
    console.log(`Lifting weight repetition ${rep}`);
}


let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++; 
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
 */

/* 
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


function calcTip(bill){
    if(bill > 50 && bill < 300){
        const tip = bill * 1.15;
        console.log(tip); 
    } else {
        const tip = bill * 1.2;
        console.log(tip);
    }
    return bill
} */


// console.log('2' == 2);
// console.log('2' === 2);

const a = 0 || false || true || '0';
const b = 1 && true && 'Eduard';
console.log(a);
console.log(b);

if (a || b){
    console.log('aasssddadad');
}
