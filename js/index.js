

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}


function displayUsers2(data) {
    const ul = document.getElementById('list-container')
    for(let user of data) {
        // console.log(user);
        console.log(user.name);
        // console.log(user.email);
        // console.log(user.username);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}