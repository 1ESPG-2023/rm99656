
// const liElement = document.getElementsByTagName("li");
// const liElementArray = [...liElement]
// console.log(liElement)

// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)   
// }

// let num1 = [1,2,3,4,5,];
// let num2 = [6,7,8,9,0];
// let num3 = [num1,num2];

// num3.map((numero,key)=>{
//     console.log(`${key+1}Itens do array - ${numero}`);
//     numero.forEach
//     }
// )

// liElementArray.map((item,key)=>{
//     if(item.textContent == "Item-47")
//         console.log(`${key+1} - ${item.textContent = "LOCALIZADO"}`)
//     }
// )

// function soma(parametro){
//     num1= 1
//     num2= 2
//     console.log(num1 + num2)
//     console.log(`Isso é um patâmetro: ${parametro}`)
// }

// soma()



// const mudaCor = ()=>{
//     setTimeout(alert("penes"),5000)
// }

// mudaCor()

// function mudaCor(){
//     let r = "";
//     let g = "";
//     let b = "";
   
//     // Math.random
//     // Math.ceil
//     // Math.floor
//     // Math.round
//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);
//     console.log(r);
//     console.log(g);
//     console.log(b);

//     const cabecalho = document.querySelector(".cabecalho")

//     cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`)

//     tmp = setTimeout(mudaCor, 1000)
// }

// mudaCor();

function mudaImg1(){
    const esquerda = document.querySelector(".l-e")
    const direita = document.querySelector(".l-d")

    esquerda.setAttribute("style", `background-image:url("./IMG/banner-lateral-2.png")`)
    direita.setAttribute("style", `background-image:url("./IMG/banner-lateral-1.png")`)

    tempo = setTimeout(mudaImg2, 1200)
}

function mudaImg2(){
    const esquerda = document.querySelector(".l-e")
    const direita = document.querySelector(".l-d")

    esquerda.setAttribute("style", `background-image:url("./IMG/banner-lateral-3.png")`)
    direita.setAttribute("style", `background-image:url("./IMG/banner-lateral-2.png")`)

    tempo = setTimeout(mudaImg3, 1200)
}    

function mudaImg3(){
    const esquerda = document.querySelector(".l-e")
    const direita = document.querySelector(".l-d")

    esquerda.setAttribute("style", `background-image:url("./IMG/banner-lateral-1.png")`)
    direita.setAttribute("style", `background-image:url("./IMG/banner-lateral-3.png")`)

    tempo = setTimeout(mudaImg1, 1200)
}    

mudaImg1()