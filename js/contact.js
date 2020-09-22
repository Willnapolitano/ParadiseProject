let nam = document.querySelector('#divf1')
let email = document.querySelector('#divf2')
let message = document.querySelector('#divf3')
let img = document.createElement('img')

img.setAttribute('id', 'imgs')
img.style.width = '300px'
img.style.position = 'absolute'
    img.style.top = '20%'

email.addEventListener('mouseover', () => {
    img.src = "/imagens/e-mail.png"
    email.appendChild(img)
})

message.addEventListener('mouseover', () => {
    img.src = "/imagens/msg.png"
    email.appendChild(img)
})

nam.addEventListener('mouseover', () => {
    img.src = '/imagens/hello.png'
    email.appendChild(img)
})
