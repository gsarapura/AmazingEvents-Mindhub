let pastEventsCards = []
let futureEventsCards = []
let allEventsCards = []

for (let event of eventsData.events) {
  if (event.date < "2022-01-01"){
    let pastCard = `
      <article>
        <figure class="card">
          <img src="${event.image}" alt="${event.name}">

          <h2>${event.name}</h2>
          <figcaption>${event.description}</figcaption>

        </figure>
        <div class="bottom-card">
          <p>Price $${event.price.toString()}</p>
          <a href="./details.html" class="button-more">Ver más</a>
        </div>
      </article>
    `
    pastEventsCards.push(pastCard)
  } else {
    let futureCard = `
      <article>
        <figure class="card">
          <img src="${event.image}" alt="${event.name}">

          <h2>${event.name}</h2>
          <figcaption>${event.description}</figcaption>

        </figure>
        <div class="bottom-card">
          <p>Price $${event.price.toString()}</p>
          <a href="./details.html" class="button-more">Ver más</a>
        </div>
      </article>
    `
    futureEventsCards.push(futureCard)
  }
  let allCard = `
    <article>
      <figure class="card">
        <img src="${event.image}" alt="${event.name}">

        <h2>${event.name}</h2>
        <figcaption>${event.description}</figcaption>

      </figure>
      <div class="bottom-card">
        <p>Price $${event.price.toString()}</p>
        <a href="./details.html" class="button-more">Ver más</a>
      </div>
    </article>
  `
  allEventsCards.push(allCard)
}

const renderEvents = () => {
  let container = document.querySelector('#cards')

  if(document.URL.includes("past-events.html")) {
    container.innerHTML = pastEventsCards.join('')
  } else if(document.URL.includes("future-events.html")) {
    container.innerHTML = futureEventsCards.join('')
  } else {
    container.innerHTML = allEventsCards.join('')
  }
}

renderEvents()
