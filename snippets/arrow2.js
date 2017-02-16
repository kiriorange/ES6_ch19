const isMale = p => p.sex === 'M';
const isYoung = p => p.age <= 30; 
const sortAgeAsc = (p1, p2) => p1.age - p2.age;
const toName = p => p.n;

const people = [{n: 'Joe Smith', sex: 'M', age: 18},
	{n: 'Sue Bradley', sex: 'F', age: 19},
	{n: 'Chuck Taylor', sex: 'M', age: 47},
	{n: 'Billy Jones', sex: 'M', age: 9}];

console.log(people.filter(isMale).filter(isYoung).sort(sortAgeAsc).map(toName).join('\n'));

