

async function init () { 

}
init();

const fetchAllSong = async () => {
    try { 
        const response = await fetch(SONGS_API_URL);
        const data = await response.json();
        return data; 
    }catch (error) { 
        console.log(error);
    }

}