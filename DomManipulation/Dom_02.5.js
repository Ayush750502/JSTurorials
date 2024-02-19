const div = document.createElement('div');
console.log(div);

div.className = 'main';
div.id = Math.round(Math.random() * 10 + 1);
div.style.backgroundColor = 'skyBlue';
div.style.padding = '12px';
div.innerText = "Welcome to code world!";

const addtext = document.createTextNode("......");
div.appendChild(addtext);

document.body.appendChild(div);