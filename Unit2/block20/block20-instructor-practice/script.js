conesole.log("Say something");

const yourName = "Appolo"; 

function Main() { 
    const rootElement = document.getElementById("root");

    const newHeadingOne = document.createElement("h1");
    newHeadingOne.innerHTML = yourName;
    rootElement.appendChild(newHeadingOne)
}

Main()