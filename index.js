const cageMovies = document.querySelector('#cageMovies')

function submitHander(ev){
    ev.preventDefault()
    const f = ev.target
    const details=document.querySelector('#details')
    const movie = f.cageMovies.value

    const boldName = document.createElement('strong')
    boldName.textContent = name
   const nameItem = document.createElement('li')
   nameItem.textContent = `Favorite Movie: ${movie}`

   const list = document.createElement('ul')
   list.appendChild(nameItem)

   details.appendChild(list)
   details.insertBefore(list, nameItem)
}

function submitHandle(ev){
    ev.preventDefault()
    const f = ev.target
    const details=document.querySelector('#details')
    const movie = f.cageMovies.value

    const boldName = document.createElement('strong')
    boldName.textContent = name
   const nameItem = document.createElement('li')
   nameItem.textContent = `New Favorite Movie: ${movie}`

   const list = document.createElement('ul')
   list.insertBefore(list, nameItem)

   //details.insertBefore(list, nameItem)
}

cageMovies.addEventListener('submit', submitHander)
cageMovies.addEventListener('submit', submitHandle)