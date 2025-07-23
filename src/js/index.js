const buttonElement = window.document.querySelector('#button')
const pElement = window.document.querySelector("#timeStamp")

buttonElement.addEventListener('click', () => {
    const button = window.document.createElement('button')
    button.textContent = 'CLICK'
    button.style.width = `100px`
    button.style.height = `40px`
    button.style.border = `2px solid black`
    buttonElement.disabled = true
    randomButton(button)
    document.body.append(button)
    const startTime = Date.now()
    button.addEventListener('click', () => {
        const timeReaction = (Date.now() - startTime) / 1000
        pElement.textContent = `${timeReaction} sec`
        button.remove()
        buttonElement.disabled = false
    })
})

function randomButton(button) {
    const maxX = window.innerWidth - button.offsetWidth
    const maxY = window.innerHeight - button.offsetHeight

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)
    
    button.style.position = 'absolute'
    button.style.left = `${randomX}px`
    button.style.top = `${randomY}px`
}