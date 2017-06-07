const cageMovies = document.querySelector('#cageMovies')

function submitHander(ev){
    ev.preventDefault()
    const f = ev.target
    const details=document.querySelector('#details')
    const movie = f.cageMovies.value

    details.innerHTML +=`<strong>${movie}</strong>`
}

cageMovies.addEventListener('submit', submitHander)