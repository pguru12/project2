const cageMovies = document.querySelector('#cageMovies')

function renderName(){
    
}

function submitHander(ev){
    ev.preventDefault()
    const f = ev.target
    const details=document.querySelector('#details')
    const movie = f.cageMovies.value
    const movie2 = f.anotherMovie.value

   // const boldName = document.createElement('strong')
   // boldName.textContent = name
   const nameItem = document.createElement('li')
   nameItem.textContent = `Favorite Moie: ${movie}`

   const nameItem2 = document.createElement('li')
   nameItem.textContent = `Second Favorite Movie: ${movie2}`

   const list = document.createElement('ul')
   list.appendChild(nameItem)
   list.appendChild(nameItem2)

   // details.appendChild(boldName)
   details.innerHTML=`
   <ul>
    <li>Movie: ${movie}</li>
    <li>Movie: ${movie2}</li>
   </ul>`
}

cageMovies.addEventListener('submit', submitHander)