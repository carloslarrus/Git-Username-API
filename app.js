let body = document.querySelector('body')
let h2 = document.querySelector('h2')
let userName = document.querySelector('.userName')
let text = document.querySelector('.text')
let submit = document.querySelector('.submit')
let ul = document.querySelector('ul')


submit.addEventListener('click', () =>{
    let user = text.value;
    fetch(`https://api.github.com/users/${user}/repos`)
    .then(res =>{
        return res.json()
    })
    .then(result => {
    return result.forEach(item =>{
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.setAttribute('href', `https://github.com/${user}/${item.name}`)
        a.innerText =item.name
        ul.appendChild(li)
        li.appendChild(a)
        
    })
    })
})



