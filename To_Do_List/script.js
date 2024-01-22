const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const addBtn = document.querySelector('button')

addBtn.addEventListener('click', ()=>{
    if(inputBox.value === ''){
        alert('You must have to assign a task')
    }
    else{
        let t = document.createElement('li')
        t.innerHTML = `<i class="fa-regular fa-circle"></i> ${inputBox.value}`
        listContainer.appendChild(t)

        let span = document.createElement('span')
        span.innerHTML = 'X'
        t.appendChild(span)
        saveData()
    }
    inputBox.value = ''
})

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        let t = document.querySelector('.fa-regular')
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
    saveData()
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()