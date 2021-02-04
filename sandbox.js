let val;
 
val=document;
val=document.head;
val=document.body;
val=document.doctype;
val=document.domain;

val=document.images;
val=document.scripts;

let scripts=document.scripts;
let scriptArr= Array.from(scripts);

scriptArr.forEach(script => {
    console.log(script.getAttribute('src'));
}); 
//------------------------------------------------------------------------------------------------------------------------//

//document.getElementById()

/* const taskTitle =document.getElementById('task-title');
console.log(taskTitle.id);
console.log(taskTitle.className);

//Change Styling

taskTitle('task-title').style.background='blue';
taskTitle('task-title').style.color='#fff';
taskTitle('task-title').style.padding='5px';
taskTitle('task-title').textContent='Task List';
taskTitle('task-title').innerText='My Tasks';
taskTitle('task-title').innerHTML='<span style="color:red">Task List</span>'; */

// document.querySelector()

/* console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(3)').style.color='yellow';
document.querySelector('li:nth-child(4)').textContent='Hello World';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
 */
//------------------------------------------------------------------------------------------------------------------------//

//document.getElementsByClassName

/* const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color='red';
items[3].textContent='Hello';

const listItems=document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems); */

// document.getElementsByTagName
/* let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color='red';
lis[3].textContent='Hello';

//Convert Html Collection into Array
lis=Array.from(lis);
lis.forEach(function(li,index){

    console.log('LiCheck: ',li.className);
    li.textContent='Hello';
    li.textContent=`${index}: Hello`;
});



console.log()
console.log(val); */
//------------------------------------------------------------------------------------------------------------------------//

//document.querySelectorAll()

/* const items =document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item,index){

    item.textContent=`${index}: Hello`;
});
const liodd= document.querySelectorAll('li:nth-child(odd)');
const lieven=document.querySelectorAll('li:nth-child(even)');

liodd.forEach(function(li,index){
li.style.background='#ccc';
})
for(let i=0;i<lieven.length;i++){
    lieven[i].style.background='#f4f4f4';
}
console.log(items); */
//------------------------------------------------------------------------------------------------------------------------//

// const list =document.querySelector('ul.collection');
// const listItem= document.querySelector('li.collection-item:first-child');

// val=listItem;
// val=list;
//Get child Nodes

// val=list.childNodes;
// val=list.childNodes[0];
// val=list.childNodes[0].nodeName;
// val=list.childNodes[1].nodeType;

// 1- Element
// 2- Attribute (deprecated)
// 3- Text node
// 8- Comment
// 9- Document itself
// 10- DocType



//Get children element nodes
/* val=list.children;
val=list.children[0].textContent='Hello';
val=list.children[3].children.id='test-link';
//First Child
val=list.firstChild;
val=list.firstElementChild;
//Last Child
val=list.lastChild;
val=list.lastElementChild;
// Count element Children
val=list.childElementCount;

// Get parent node

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
// Get next siblings

val= listItem.nextSibling;
val=listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val= listItem.previousSibling;
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;
 */


//------------------------------------------------------------------------------------------------------------------------//
//Create element
/* const li = document.createElement('li');

//Add class

li.className='collection-item';

//Add id
li.id= 'new-item';
//Add Attribute

li.setAttribute('title', 'New Item');

// Create text node and append

li.appendChild(document.createTextNode('Hello World'));
// Create new link element

const link=document.createElement('a');
// Add classes
link.className= 'delete-item secondary-content';
// Add icon html 
link.innerHTML= '<i class="fa fa-remove"></i>';

//Append link into li

li.appendChild(link);

//Append li as child to ul

const ul=document.querySelector('ul.collection');
ul.appendChild(li);

console.log(ul); */

//------------------------------------------------------------------------------------------------------------------------//

// REPLACE ELEMENT

/* const newHeading = document.createElement('h2');

//Add ID

newHeading.id='task-title';

// New text node

newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading

const oldHeading= document.getElementById('task-title');

// Parent

const cardAction = document.querySelector('.card-action')

// Replace

cardAction.replaceChild(newHeading,oldHeading);

//REMOVE ELEMENT

const lis=document.querySelectorAll('li');
const list =document.querySelector('ul');

// Remove list item

lis[0].remove();

// Remove child element

list.removeChild(lis[3]);

// CLASSES & ATTR

//Classes
const firstLi = document.querySelector('li:first-child');

const link=firstLi.children[0];
//Gives you the name of classes

val=link.className;

//Gives you all classes in a list

val=link.classList;
val=link.classList[0];

link.classList.add('test');
link.classList.remove('test');
val=link;

// Attributes

val=link.getAttribute('href');
val=link.setAttribute('href','http://google.com');
va=link.setAttribute('title','Google');
val=link.hasAttribute('href');
val=link.removeAttribute('title'); */
//------------------------------------------------------------------------------------------------------------------------//
/* 
document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Hello World');

    e.preventDefault();
});
document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){

//console.log('Clicked');

let val;


val=e;

val=e.target;
val=e.target.id;
val=e.target.className;
val=e.target.classList;
e.target.innerText='Hello';
//Event Type

val=e.type;

// TimeStamp

val=e.timeStamp;

// Coords event relative to the window

val=e.clientY;
val=e.clientX;

// Coords event relative to the element

val=e.offsetY;
val=e.offsetX;




console.log(val);

};
 */

/*  const clearBtn = document.querySelector('.clear-tasks');
 const card = document.querySelector('.card');
 const heading=document.querySelector('h5'); */
// Click
//clearBtn.addEventListener('click',runEvent);
 // DoubleClick
//clearBtn.addEventListener('dblclick',runEvent);
// Mousedown
//clearBtn.addEventListener('mousedown',runEvent);
//MouseUp
//clearBtn.addEventListener('mouseup',runEvent);
// MouseEnter
//card.addEventListener('mouseenter',runEvent);
// MouseLeave
//card.addEventListener('mouseleave',runEvent);
// MouseOver
//card.addEventListener('mouseover',runEvent);
// MouseOut
//card.addEventListener('mouseout',runEvent);
// Mousemove
/* card.addEventListener('mousemove',runEvent);
 // Event Handler

 function runEvent(e){
     console.log(`EVENT TYPE: ${e.type}`);

     heading.innerHTML=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
 } */


//------------------------------------------------------------------------------------------------------------------------//

/* const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading= document.querySelector('h5');
const select = document.querySelector('select');
//Clear Input

taskInput.value= '';
// Keydown
//taskInput.addEventListener('keydown', runEvent);
// KeyUp
//taskInput.addEventListener('keyup', runEvent);
// KeyPress
//taskInput.addEventListener('keypress', runEvent);
//Focus
//taskInput.addEventListener('focus',runEvent);
// Blur
//taskInput.addEventListener('blur',runEvent);
// Cut
//taskInput.addEventListener('cut',runEvent);
// Paste
//taskInput.addEventListener('paste',runEvent);
// Input Event
//taskInput.addEventListener('input',runEvent);

select.addEventListener('change',runEvent);




function runEvent(e){


console.log(`EVENT TYPE: ${e.type}`);


console.log(e.target.value);

//heading.innerText=e.target.value;
//Get Input Value
//console.log(taskInput.value);
//e.preventDefault(); 

}*/

//------------------------------------------------------------------------------------------------------------------------//

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click',
// function(){
// console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
// console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
// function(){
// console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
// console.log('col');
// });

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem)

/* document.body.addEventListener('click',deleteItem);

function deleteItem(e){
    // if(e.target.parentElement.className==='delete-item secondary-content'){

    //     console.log('delete it');
    //     console.log(e.target);
    // }
    if(e.target.parentElement.classList.contains('delete-item')){

        console.log('delete it');
        e.target.parentElement.parentElement.remove();
    }

} */
//------------------------------------------------------------------------------------------------------------------------//
//set local storage item

// localStorage.setItem('name','John');
// localStorage.setItem('age','30');

 //set session storage item

// sessionStorage.setItem('name','beth');

//remove from storage

//localStorage.removeItem('name');

// get from storage

// const name = localStorage.getItem('name');
// console.log(name);

// clear local storage

// localStorage.clear();
/*
document.querySelector('form').addEventListener('submit',
function (e){
    const task=document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task Saved');

    e.preventDefault();
})

const tasks= JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){

    console.log(task);
});
*/