 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	
let algebra = a;
let geography = g;
let physics = p;
let divider = 3;
    let sum;
    sum = (algebra + geography + physics)/divider;
    
	return sum;
}

function sayHello(userName) {
    
	return `Привет, мир! Меня зовут ${userName}`;
}

function calculateFormula() {
let x = 2;
let y = 22;
let z = 0;
    let result;
    result = x * y + 5 * z + x - 1;
    return result;
}
