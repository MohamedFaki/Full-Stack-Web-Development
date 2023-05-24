const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
// grab the "root" element, add an h1 element, give it text of "FREELANCERS", and append the HTML document
function main() {
    // grabbed root element
    const rootElement = document.getElementById("root");

    // adding h1  element
    const h1 = document.createElement('h1');
    h1.innerHTML = 'FREELANCERS';
    rootElement.appendChild(h1);

    //create an unordered list element. loop through the users array creating li elements, append those elements to your HTML document
    const ul = document.createElement('ul');
    rootElement.appendChild(ul);

    //for loop to create li items
    for (let person of users) {
        let li = document.createElement('li');
        li.innerHTML = person.name + ', age: ' + person.age + ', occupation: ' + person.occupation;
        ul.appendChild(li);

    }

    rootElement.appendChild(ul)
}

//call the main function
main();