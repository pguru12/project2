const cageMovies = document.querySelector('#cageMovies')

function submitHander(ev){
    ev.preventDefault()
    const f = ev.target
    const details=document.querySelector('#details')
    const movie = f.cageMovies.value

    const boldName = document.createElement('strong')
    boldName.textContent = name

    details.appendChild(boldName)
}

cageMovies.addEventListener('submit', submitHander)