const mainContainer = document.querySelector('.main-container')
const textEl = document.getElementById('text')
const addListEl = document.getElementById('add-list')
const addedList = document.getElementById('added-list')

textEl.addEventListener('input', (e) => {
    textVal = e.value
})
let CountList = 1;
addListEl.addEventListener('click', addbtn);
function addbtn() {
    if (textEl.value) {
        let textVal = textEl.value
        let createElement_div = document.createElement('div')
        createElement_div.style.background='#fff'
        let createElement_h1 = document.createElement('h1')
        let createElement_span = document.createElement('span')
        mainContainer.appendChild(createElement_div)
        createElement_div.appendChild(createElement_h1)
        createElement_h1.appendChild(createElement_span)
        createElement_span.innerText = 'click'
        createElement_span.style.color='red'
        createElement_h1.style.color = 'yellow'
        createElement_span.innerText = ' \u00d7'
        let spanVal = createElement_span.textContent
        createElement_h1.innerText = `${CountList++}${'.'}${textVal}${spanVal}`
        // createElement_h1.innerText = `${textVal}${spanVal}`   
    }
    if (textEl.value == '') {
        alert('first write down')
    }
    else {
        CountList = ''

    }
    if (textEl.value != '') {
        textEl.value = ''
    }
    // if (window == 'Enter') {
    //     alert('ad')
    // }
}


