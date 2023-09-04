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
    let textVal = textEl.value
    let createElement_div = document.createElement('div')
    let createElement_h1 = document.createElement('h1')
    createElement_h1.style.color = 'yellow'
    faSolid.style.visibility = 'visible'
    mainContainer.appendChild(createElement_div)
    createElement_div.appendChild(createElement_h1)
    createElement_h1.innerText = `${CountList++}${'.'}${textVal}`
    // faSolid.addEventListener('click', () => {
    //     createElement_h1.innerText = `${CountList--}${'.'}${textVal=''}`
    // })
}