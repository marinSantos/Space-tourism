function backToHome(){
    window.scroll(0,0)
    home.classList.add('atual')
    destination.classList.remove('atual')
    crew.classList.remove('atual')
    tech.classList.remove('atual')

}


let home = document.getElementById('home')
let destination = document.getElementById('destination')
let crew = document.getElementById('crew')
let tech = document.getElementById('technology')

let explore = document.getElementById('explore')

explore.addEventListener('click', function () {
     destination.classList.add('atual')
     home.classList.remove('atual')
    crew.classList.remove('atual')
    
})


home.addEventListener('click', function () {
    home.classList.add('atual')
    destination.classList.remove('atual')
    crew.classList.remove('atual')
    tech.classList.remove('atual')

})

destination.addEventListener('click', function () {

    destination.classList.add('atual')
    home.classList.remove('atual')
    crew.classList.remove('atual')
    tech.classList.remove('atual')

})




crew.addEventListener('click', function () {
    crew.classList.add('atual')
    destination.classList.remove('atual')
    home.classList.remove('atual')
    tech.classList.remove('atual')




})

tech.addEventListener('click', function () {

    tech.classList.add('atual')
    home.classList.remove('atual')
    crew.classList.remove('atual')
    destination.classList.remove('atual')

})






let item001 = document.getElementById('item0-01')
let item101 = document.getElementById('item1-01')
let item201 = document.getElementById('item2-01')
let item301 = document.getElementById('item3-01')

let planet0 = document.getElementById('planet0')

window.onresize = function(){
    planet0.classList.remove('transition')
}

item001.addEventListener('mouseover',function(){
    planet0.classList.add('transition')
})
item101.addEventListener('mouseover',function(){
    planet0.classList.add('transition')
})
item201.addEventListener('mouseover',function(){
    planet0.classList.add('transition')
})
item301.addEventListener('mouseover',function(){
    planet0.classList.add('transition')
})

item001.addEventListener('mouseleave',function(){
    planet0.classList.remove('transition')
})
item101.addEventListener('mouseleave',function(){
    planet0.classList.remove('transition')
})
item201.addEventListener('mouseleave',function(){
    planet0.classList.remove('transition')
})
item301.addEventListener('mouseleave',function(){
    planet0.classList.remove('transition')
})


item001.addEventListener('click', function () {
    item001.classList.add('active-01')
    item101.classList.remove('active-01')
    item201.classList.remove('active-01')
    item301.classList.remove('active-01')

    planet0.classList.add('margin0')
    planet0.classList.remove('margin1')
    planet0.classList.remove('margin2')
    planet0.classList.remove('margin3')

    planet0.classList.add('transition')

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

    planet0.classList.add('transition')

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

    planet0.classList.add('transition')
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

    planet0.classList.add('transition')
})

// 02
let item002 = document.getElementById('item0-02')
let item102 = document.getElementById('item1-02')
let item202 = document.getElementById('item2-02')
let item302 = document.getElementById('item3-02')

let primeiro202 = document.querySelector('.primeiro2-02')




item002.addEventListener('click', function () {
    item002.classList.add('active-02')
    item102.classList.remove('active-02')
    item202.classList.remove('active-02')
    item302.classList.remove('active-02')
    
    primeiro202.classList.add('margin0-02')
    primeiro202.classList.remove('margin1-02')
    primeiro202.classList.remove('margin2-02')
    primeiro202.classList.remove('margin3-02')

})
item102.addEventListener('click', function () {
    item102.classList.add('active-02')
    item002.classList.remove('active-02')
    item202.classList.remove('active-02')
    item302.classList.remove('active-02')
     

    primeiro202.classList.add('margin1-02')
    primeiro202.classList.remove('margin0-02')
    primeiro202.classList.remove('margin2-02')
    primeiro202.classList.remove('margin3-02')

})
item202.addEventListener('click', function () {
    item202.classList.add('active-02')
    item002.classList.remove('active-02')
    item102.classList.remove('active-02')
    item302.classList.remove('active-02')

    primeiro202.classList.add('margin2-02')
    primeiro202.classList.remove('margin0-02')
    primeiro202.classList.remove('margin1-02')
    primeiro202.classList.remove('margin3-02')

    
})
item302.addEventListener('click', function () {
    item302.classList.add('active-02')
    item002.classList.remove('active-02')
    item102.classList.remove('active-02')
    item202.classList.remove('active-02')

    
    primeiro202.classList.add('margin3-02')
    primeiro202.classList.remove('margin0-02')
    primeiro202.classList.remove('margin1-02')
    primeiro202.classList.remove('margin2-02')
})

const mobile = document.getElementById('mobile')
const nav = document.getElementById('nav')
const burguer = document.getElementById('burguer')
const clos = document.getElementById('close')

mobile.addEventListener('click',function(){
nav.classList.toggle('mobile')
burguer.classList.toggle('mobile')
clos.classList.toggle('mobile')

})


//3

let item0_03 = document.getElementById('item0-03')
let item1_03 = document.getElementById('item1-03')
let item2_03 = document.getElementById('item2-03')

let primeiro2_03 = document.querySelector('.primeiro2-03')




item0_03.addEventListener('click', function () {
    item0_03.classList.add('active03')
    item1_03.classList.remove('active03')
    item2_03.classList.remove('active03')
    
    
    primeiro2_03.classList.add('margin0-03')
    primeiro2_03.classList.remove('margin1-03')
    primeiro2_03.classList.remove('margin2-03')


})
item1_03.addEventListener('click', function () {
    item1_03.classList.add('active03')
    item0_03.classList.remove('active03')
    item2_03.classList.remove('active03')
    
     

    primeiro2_03.classList.add('margin1-03')
    primeiro2_03.classList.remove('margin0-03')
    primeiro2_03.classList.remove('margin2-03')


})
item2_03.addEventListener('click', function () {
    item2_03.classList.add('active03')
    item0_03.classList.remove('active03')
    item1_03.classList.remove('active03')
    

    primeiro2_03.classList.add('margin2-03')
    primeiro2_03.classList.remove('margin0-03')
    primeiro2_03.classList.remove('margin1-03')

    
})

