let ToshItem = '<h1>Toshkent</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let searchs = document.querySelector('.search')
let Box = document.querySelector('#content')
let vodItem = '<h1>Vodiy</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let vohItem = '<h1>Voha</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let andjItem = '<h1>Andijon</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let namIItem = '<h1>Namangan</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let farItem = '<h1>Farg\'ona</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let sirItem = '<h1>Sirdaryo</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let jizItem = '<h1>Jizzah</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let samItem = '<h1>Samarqand</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let buhItem = '<h1>Buhoro</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let horItem = '<h1>Horazm</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let qashItem = '<h1>Qashqadaryo</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let surhItem = '<h1>Surhondaryo</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let navItem = '<h1>Surhondaryo</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
let nukItem  = '<h1>Nukus</h1> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat?</b>'
function tosh() {
    document.querySelector('#content').innerHTML = ToshItem
    Box.classList.add('transitions')
    searchs.classList.add('hide');
    document.querySelector('#content').style.display = 'block'
    searchs.classList.remove('block');
    document.querySelector('.back').style.display = 'block'
}

function vod() {
    document.querySelector('#content').innerHTML = vodItem
    Box.classList.add('transitions')
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    document.querySelector('.back').style.display = 'block'
}

function voh() {
    document.querySelector('#content').innerHTML = vohItem
    Box.classList.add('transitions')
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    document.querySelector('.back').style.display = 'block'
}

function and() {
    document.querySelector('#content').innerHTML = andjItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function nam() {
    document.querySelector('#content').innerHTML = namIItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function far() {
    document.querySelector('#content').innerHTML = farItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function sir() {
    document.querySelector('#content').innerHTML = sirItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function jiz() {
    document.querySelector('#content').innerHTML = jizItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function sam() {
    document.querySelector('#content').innerHTML = samItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}   

function buh() {
    document.querySelector('#content').innerHTML = buhItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function hor() {
    document.querySelector('#content').innerHTML = horItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function qash() {
    document.querySelector('#content').innerHTML = qashItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function surh() {
    document.querySelector('#content').innerHTML = surhItem
    searchs.classList.add('hide');
    document.querySelector('.back').style.display = 'block'
    searchs.classList.remove('block');
    Box.classList.add('transitions')
}

function nav() {
    document.querySelector('#content').innerHTML = navItem
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function nuk() {
    document.querySelector('#content').innerHTML = nukItem
    document.querySelector('#content').style.display = 'block'
    searchs.classList.add('hide');
    searchs.classList.remove('block');
    Box.classList.add('transitions')
    document.querySelector('.back').style.display = 'block'
}

function back() {
    document.querySelector('#content').innerHTML = ''
    document.querySelector('.back').style.display = 'none'
    Box.classList.remove('transitions')
    searchs.classList.remove('hide');
    searchs.classList.add('block');
}