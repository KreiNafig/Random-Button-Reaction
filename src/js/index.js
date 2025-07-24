const buttonElement = window.document.querySelector('#button')
const pElement = window.document.querySelector("#timeStamp")
const timeMiddleElement = window.document.querySelector('#timeMiddle')
const timeArray = []

buttonElement.addEventListener('click', () => {
    
    buttonElement.disabled = true
    spawnButton(0)
})

function randomButton() {
    const button = window.document.createElement('button')
    button.classList.add('randomButton')
    button.textContent = 'CLICK'
    button.style.width = `100px`
    button.style.height = `40px`
    button.style.border = `2px solid black`
    const maxX = window.innerWidth - button?.offsetWidth
    const maxY = window.innerHeight - button?.offsetHeight

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)
    
    button.style.position = 'absolute'
    button.style.left = `${randomX}px`
    button.style.top = `${randomY}px`
    document.body.append(button)
}

function spawnButton(count = 0) {
    if (count === 5) {
        buttonElement.disabled = false
        buttonElement.textContent = 'Reset Game'
        const time = timeArray.reduce((acc, elem) => acc += elem, 0).toFixed(2)
        pElement.textContent = `${time} sec`
        timeMiddleElement.textContent = `Средняя скорость нажатия:  ${(time / 5).toFixed(2)} sec`
        return
    }

    const delay = Math.random() * 2000 + 1000
    setTimeout(() => {
        const startTime = Date.now()
        randomButton()
        const button = window.document.querySelector('.randomButton')

        button.addEventListener('click', () => {
            const endTime = (Date.now() - startTime) / 1000
            timeArray.push(endTime)
            console.log(timeArray, timeArray.reduce((acc, elem) => acc += elem, 0))
            button.remove()
            spawnButton(count + 1)
        })
    }, delay)
}