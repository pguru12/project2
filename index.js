const cageMovies = document.querySelector('#cageMovies')

function submitHander(ev){
    ev.preventDefault()
    const f = ev.target
    const details=document.querySelector('#details')
    const movie = f.cageMovies.value
    const movie2 = f.anotherMovie.value

   // const boldName = document.createElement('strong')
   // boldName.textContent = name

   // details.appendChild(boldName)
   details.innerHTML=`
   <ul>
    <li>Name: ${movie}</li>
    <li>Name: ${movie2}</li>
   </ul>`
}

cageMovies.addEventListener('submit', submitHander)