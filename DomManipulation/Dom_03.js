function addlang(langnm){
    const li = document.createElement('li');
    li.innerHTML = `${langnm}`;//Traverses whole element
    console.log(li);
    document.querySelector('.lang').appendChild(li);
}

addlang('python');
addlang('java');

function addlangOpt(langnm){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langnm));// just adds text into the element
    console.log(li);
    document.querySelector('.lang').appendChild(li);
}

addlangOpt('Dart');
addlangOpt('TypeScript');

// Edit:-

const seclang = document.querySelector('li:nth-child(2)');
let newli = document.createElement('li');
newli.textContent = "C#";
//// Replacing element :-
seclang.replaceWith(newli);

const thirdlang = document.querySelector('li:nth-child(4)');
//// Removing elements :-
thirdlang.remove();
