const students = [
    {id:21, name: ' soikot'},
    {id:31, name: ' sajjad'},
    {id:11, name: ' arthi'},
    {id:71, name: ' tajmim'},

];

const name = students.map( s=> s.name);
console.log(name);


const ids = students.map( s=> s.id);
console.log(ids);

const bigger = students.filter( s=> s.id>40);
console.log(bigger);

const bigger1 = students.find( s=> s.id>40);
console.log(bigger1);