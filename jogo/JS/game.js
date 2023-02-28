const dino = document.querySelector('img.dinossauro')
const cacto = document.querySelector('img.cacto')


document.addEventListener('keydown', function()
{
    dino.classList.add('jump')

    setTimeout(function(){
        setTimeout(dino.classList.remove('jump'), 0.1)
    }, 1000)

})

const loop = setInterval(function()
{
    const cactopos = cacto.offsetLeft
    const dinacar = window.getComputedStyle(dino)
    let jumph = dinacar.bottom.replace('px', '')
    
    Number(jumph)

    if (cactopos <= 140 && jumph <= 105 && cactopos > 0)
    {
        dino.src = "Images/Dinossaur-death.png"
        cacto.style.animation = 'none'
        cacto.style.left = cactopos+'px'

        dino.style.bottom = jumph+'px'
        clearInterval(loop)
    }
}, /*E aqui fica o intervalo em que essa função será executada */ 10)

