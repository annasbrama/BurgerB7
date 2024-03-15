console.log('Burger')

let products = document.querySelector('.products')

fetch('burgers.json').then(resposta => resposta.json()).then(dados => dados.forEach ((burger) => {
    console.log(burger.category)
    console.log(burger.name)
    console.log(burger.price)
    //console.log(burger.warning)

    let item = document.createElement('div')
    item.classList.add('item')
    console.log(item)
    products.appendChild(item)

    item.innerHTML=`
    
    <h2 class="category">${burger.category}</h2>
    <h3 class="name">${burger.name}</h3>
    <span class="price">${burger.price}</span>
    <img class="photo" src="assets/img/${burger.photo}.png" alt"" />
    `
})
)