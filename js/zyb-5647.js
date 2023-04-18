
const liElement = document.getElementsByTagName("li");
console.log(liElement)

for (let index = 0; index < liElement.length; index++) {
    console.log(liElement[index].textContent)   
}

let num1 = [1,2,3,4,5,];
let num2 = [6,7,8,9,0];
let num3 = [num1,num2];

console.log(num3)