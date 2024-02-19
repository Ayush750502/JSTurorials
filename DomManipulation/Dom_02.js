const parent = document.querySelector('.parent');

//console.log(parent);//select's elememt
//console.log(parent.children);//htmlCollection of children elements
//console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i];
    //console.log(element.innerHTML);
}

parent.children[1].style.color = 'orange';//styling color to orange
//console.log(parent.firstElementChild);//picking first child in the element
//console.log(parent.lastElementChild);//picking last child in the element
const dayOne = document.querySelector('.day');
//console.log(dayOne);
//console.log(dayOne.parentElement);// selects parent element of the current element
//console.log(dayOne.nextElementSibling);// selects the next element in the same level

//console.log("NODE: ",parent.childNodes);

