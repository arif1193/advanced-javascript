const students = [
    {id : 21, name : 'omor sani'},
    {id : 31, name : 'manaa'},
    {id : 41, name : 'moyori'},
    {id : 71, name : 'deepjol'} 
];

const names = students.map( s => s.name);
const ids = students.map(s =>s.id);
const bigger = students.filter( s => s.id > 40);
const bigger1 = students.find( s => s.id > 40);
console.log(bigger1);