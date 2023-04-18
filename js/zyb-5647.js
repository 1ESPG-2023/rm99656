
const liElement = document.getElementsByTagName("li");
const liElementArray = [...liElement]
console.log(liElement)

for (let index = 0; index < liElement.length; index++) {
    console.log(liElement[index].textContent)   
}

let num1 = [1,2,3,4,5,];
let num2 = [6,7,8,9,0];
let num3 = [num1,num2];

num3.map((numero,key)=>{
    console.log(`${key+1}Itens do array - ${numero}`);
    numero.forEach
    }
)

liElementArray.map((item,key)=>{
    if(item.textContent == "Item-47")
        console.log(`${key+1} - ${item.textContent = "LOCALIZADO"}`)
    }
)