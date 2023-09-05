const mainContainer = document.querySelector('.main-container')
const textEl = document.getElementById('text')
const addListEl = document.getElementById('add-list')
const seeListEl = document.getElementById('see-list')
const addedList = document.getElementById('added-list')
const faSolid = document.querySelector('.fa-solid')

textEl.addEventListener('input', (e) => {
    textVal = e.value
})
let CountList = 1;
addListEl.addEventListener('click', addbtn);
function addbtn() {
    if (textEl.value == '') {
        alert('first write down')
    }
    else {
        createElement_h1.innerText = `${CountList = ''}${'.'}${textVal}`

    }
    if (textEl.value) {
        let textVal = textEl.value
        let createElement_div = document.createElement('div')
        let createElement_h1 = document.createElement('ul')
        createElement_h1.style.color = 'yellow'
        mainContainer.appendChild(createElement_div)
        createElement_div.appendChild(createElement_h1)
        createElement_h1.innerText = `${CountList++}${'.'}${textVal}`
    }
    if (textEl.value != '') {
        textEl.value = ''
    }
    if (window == 'Enter') {
        alert('ad')
    }
}
seeListEl.addEventListener('click', () => {
    if (textEl.value == '') {
        alert('first write down')
    }
    if (textEl.value) {
        document.body.style.background = '#000'
        let createElement_div = document.createElement('div')
        let createElement_table = document.createElement('table')
        let createElement_list = document.createElement('th')
        createElement_div.className = 'list-div'
        createElement_table.className = 'list-table'
        createElement_list.className = 'list-ul'
        document.body.appendChild(createElement_div)
        createElement_div.appendChild(createElement_table)
        createElement_table.appendChild(createElement_list)
    }

})

