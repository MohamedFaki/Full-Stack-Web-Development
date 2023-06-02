//https://fsa-async-await.herokuapp.com/


//Create a `script.js` file with create an asynchronous `init` function that will contain your most important code. Call the `init` function at the bottom of your file.
async function init () { 
const song = await fetchAllSong();
console.log(songs)
const songs = await fetchAllSongs();
renderSongs(songs);
renderNewSongForm();
}
init();
//Write a function called `fetchAllSongs` that will fetch all songs from the server and return them as JSON.

const fetchAllSong = async () => {
    try { 
        const response = await fetch(SONGS_API_URL);
        const data = await response.json();
        return data; 
    }catch (error) { 
        console.log(error);
    }

}

function renderSongs(songs) {
    const songContainer = document.querySelector('#song-container');
    songContainer.innerHTML = '';
    songs.forEach((song) => {
      const songElement = renderSong(song);
      songContainer.append(songElement);
    });
  }

  async function addNewSong(song) {
    const response = await fetch('/api/guided-practice/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(song),
    });
    const newSong = await response.json();
    return newSong;
  }

  function renderNewSongForm() {
    const newSongForm = document.querySelector('#new-song-form');
    newSongForm.innerHTML = `
      <form>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
        <label for="artist">Artist</label>
        <input type="text" name="artist" id="artist" />
        <label for="genre">Genre</label>
        <input type="text" name="genre" id="genre" />
        <label for="release-date">Release Date</label>
        <input type="date" name="release-date" id="release-date" />
        <button type="submit">Submit</button>
      </form>
    `;
  }


  newSongForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const genre = document.getElementById('genre').value;
    const releaseDate = document.getElementById('release-date').value;

    const newSong = {
        title,
        artist_id: artist,
        genre_id: genre,
        release_date: releaseDate
    };

    await addNewSong(newSong);
    const songs = await fetchAllSongs();
    renderAllSongs(songs);
});