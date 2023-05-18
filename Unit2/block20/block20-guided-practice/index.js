// get root element with id root
const root = document.getElementById("root");
// create h1 element
const h1 = document.createElement("h1");
// set innerHTML of h1 element to Mona Lisa
h1.innerHTML = "Mona Lisa";
// append h1 element as a child to the root element
root.appendChild(h1);
// create img element with id img
const img = document.createElement("img");
// set source of image
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/1354px-Mona_Lisa.jpg';
// append image element as a child to root element
root.appendChild(img);
// create p element with id p
const p = document.createElement("p");
// sett innerText of p to The famous mona lisa painting
p.innerText = "The famous Mona Lisa Painting"
//append p element as child to root element
root.appendChild(p);

img.width = 200;