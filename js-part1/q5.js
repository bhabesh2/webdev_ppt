//Q.5 What is the difference between let and const in ES6?

//Ans: let and const both has block scope but with let variable can be re-assigned and also can be undefined but can't re-declear but with const keyword variable can't be undefined or re-assign and re-declear.

{
	let a = 20;
	a = 30;
	console.log(a) // 30;

	let name; // undefined
	name = "Ram";
	console.log(name); // Ram
}

{
	const a;// undefined(wrong)
	const b = 20;
	b = 30; // wrong (re-assign)
	const b = 30; // wrong (re-declear)
}

