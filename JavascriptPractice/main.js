// Single eelemnt

//console.log(document.getElementById('my-form'))
//console.log(document.querySelector('h1'))

//Multiple Elements

//console.log(document.querySelector('.item'))
//console.log(document.getElementsByClassName('item'))
//console.log(document.getElementsByTagName('li'))

//const ul = document.querySelector('.items')
//ul.remove() // removes ul from webpage

//ul.lastElementChild.remove(); // removes last elemnt from ul (last li)

//ul.firstElementChild.textContent = 'Hello'

//ul.children[1].innerText = 'Brad'

//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
/*
const btn = document.querySelector('.btn')
btn.style.background = 'red'

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
})*/

const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    btn.style.background = '#ccc'

})

btn.addEventListener('mouseover', (e) =>{
    e.preventDefault()
    btn.style.background = '#fea'

})

btn.addEventListener('mouseout', (e) =>{
    e.preventDefault()
    btn.style.background = '#cdf'

})


const myForm = document.querySelector('#my-form')
const name1 = document.querySelector('#name')
const email = document.querySelector('#email')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault()

    if(name1.value=='' || email.value==''){
        alert('Please enter details')
    } else{
        console.log(name1.value)
        console.log(email.value)

    }

}
