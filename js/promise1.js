fetch('https://jsonplaceholder.typicode.com/todos')
    .then((data) => data.json())
    .then((jsonData) => console.log(jsonData))
    .catch((error) => console.log(error));


let x = 2;
let y = 3;
let result = x+y;
console.log(result);