let home = document.getElementById('home')
let destination = document.getElementById('destination')


let explore = document.getElementById('explore')

explore.addEventListener('click', function () {
    window.scrollTo(0,1000)
     destination.classList.add('atual')
     home.classList.remove('atual')
    
})


home.addEventListener('click', function () {
    home.classList.add('atual')
    destination.classList.remove('atual')

    window.scrollTo(0,0)


})


destination.addEventListener('click', function () {

    destination.classList.add('atual')
    home.classList.remove('atual')

    window.scrollTo(0,1000)
})







let item001 = document.getElementById('item0-01')
let item101 = document.getElementById('item1-01')
let item201 = document.getElementById('item2-01')
let item301 = document.getElementById('item3-01')

let planet0 = document.getElementById('planet0')




item001.addEventListener('click', function () {
    item001.classList.add('active-01')
    item101.classList.remove('active-01')
    item201.classList.remove('active-01')
    item301.classList.remove('active-01')

    planet0.classList.add('margin0')
    planet0.classList.remove('margin1')
    planet0.classList.remove('margin2')
    planet0.classList.remove('margin3')

})
item101.addEventListener('click', function () {
    item101.classList.add('active-01')
    item001.classList.remove('active-01')
    item201.classList.remove('active-01')
    item301.classList.remove('active-01')


    planet0.classList.add('margin1')
    planet0.classList.remove('margin0')
    planet0.classList.remove('margin2')
    planet0.classList.remove('margin3')

})
item201.addEventListener('click', function () {
    item201.classList.add('active-01')
    item001.classList.remove('active-01')
    item101.classList.remove('active-01')
    item301.classList.remove('active-01')

    planet0.classList.add('margin2')
    planet0.classList.remove('margin0')
    planet0.classList.remove('margin1')
    planet0.classList.remove('margin3')
})
item301.addEventListener('click', function () {
    item301.classList.add('active-01')
    item001.classList.remove('active-01')
    item101.classList.remove('active-01')
    item201.classList.remove('active-01')
    planet0.classList.add('margin3')
    planet0.classList.remove('margin0')
    planet0.classList.remove('margin1')
    planet0.classList.remove('margin2')
})


