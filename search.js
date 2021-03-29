document.querySelector('#elastic').oninput = function() {
    let val = this.value.trim()
    let selectItem = document.querySelectorAll('.elastic li')
    if(val != '') {
        selectItem.forEach(function(elem){
            if(elem.innerText.search(val) == -1) {
                elem.classList.add('hide')
                elem.innerHTML = elem.innerText
            }else {
                elem.classList.remove('hide')
                let str = elem.innerText;
                elem.innerHTML = InsertMark(str,elem.innerText.search(val), val.length)
            }
        })
    }else {
        selectItem.forEach(function(elem){
            elem.classList.remove('hide')
            elem.innerHTML = elem.innerText
        })
    }
}

function InsertMark(string, pos, len){

    return string.slice(0, pos)+'<mark>'+string.slice(pos, pos+len)+'</mark>'+string.slice(pos+len)
}

