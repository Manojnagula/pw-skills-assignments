const container = document.getElementById("container");
const searchButton = document.getElementById("searchButton");
const inputTitle = document.getElementById("movieTitleInput");

inputTitle.addEventListener("input", (event) => {
  const input = event.target.value.trim();
  if (input == " ") {
    return;
  }
  fetchMovie(input);
});

async function fetchMovie(title) {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${title}&apikey=c35d439e`
    );

    const movie = await response.json();
    if (movie.Response == "False") {
      console.log("Movie not found");
      return;
    }
    
    movieCard(movie);
  } catch (error) {
    console.log(error.message);
  }
}

function movieCard(movie) {
  const card = document.createElement("div");
  card.className = "card";
  container.insertBefore(card,container.firstChild);

  const poster = document.createElement("img");
  poster.className = "poster";
  poster.alt = "poster";
  poster.src = `${movie.Poster}`;
  card.appendChild(poster);

  const movieName = document.createElement("p");
  movieName.textContent = `${movie.Title}`;
  movieName.className = "movieName";
  card.appendChild(movieName);

  const watch = document.createElement("button");
  watch.textContent = "Watch now";
  watch.className = "watch";
  card.appendChild(watch);
}
