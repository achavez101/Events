
// video 87

// video 86
// const logo = document.querySelector('img');

//function onClick(e) {

    // Target
    // console.log(e.target);
    // Current Target
    // console.log(e.currentTarget);
    // Type
    // console.log(e.type);
    // Time Stamp
    // console.log(e.timeStamp);
    // client X - horizontal
    // console.log(e.clientX);
    // client Y - vertical
    // console.log(e.clientY);
    // offset X
    // console.log(e.offsetX);
    // offset Y
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY);


    // can use as well to change elements
//     console.log(e.currentTarget);
//     e.target.style.backgroundColor = 'black';
//}
// function onDrag(e) {
//     document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// }

// logo.addEventListener('click', onClick);
// logo.addEventListener('drag', onDrag);


// document.body.addEventListener('click', function (e) {
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// document.querySelector('a').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('Link was clicked');
// })

// video 85

// const logo = document.querySelector('img');
// const onClick = () => console.log('click event');
// const onDoubleClick = () => {
    
//     //Toggle Example
    
//     if(document.body.style.backgroundColor !== 'purple'){
//         document.body.style.backgroundColor = 'purple';
//         document.body.style.color = 'white';
//     } else if (document.body.style.backgroundColor === 'purple'){
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
    
// };
// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('mouse down event');
// const onMouseUp = () => console.log('mouse up event');
// const onMouseWheel = () => console.log('mouse wheel event'); //doesn't detect my bluetooth mouse
// const onMouseOver = () => console.log('mouse over event'); //doesn't detect my bluetooth mouse
// const onMouseOut = () => console.log('mouse out event'); //doesn't detect my bluetooth mouse
// const onDragStart = () => console.log('drag start event'); //doesn't detect my bluetooth mouse
// const onDrag = () => console.log('drag event'); //doesn't detect my bluetooth mouse
// const onDragEnd = () => console.log('drag end event'); //doesn't detect my bluetooth mouse


// //event listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseWheel); // i don't have a wheel
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('drag', onDrag);
// logo.addEventListener('dragend', onDragEnd);


//video 83-84

// const clearBtn = document.querySelector('#clear');

//clear items function

// function onClear() {
//     const itemList = document.querySelector('ul');

//     itemList.innerHTML = '';
// }
// JavaScript Event Listener
// clearBtn.onclick = function() {
//     alert('Clear Items');
// };

// clearBtn.onclick = function() {
//     console.log('Clear Items');
// };

// Add event listener method
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear),5000);

// setTimeout(() => clearBtn.click(), 5000);

// function onClear() {
//     const itemList = document.querySelector('ul');
//     const items = itemList.querySelectorAll('li');

//     items.forEach((items) => item.remove());
//     //itemList.innerHTML = '';
   
// }

// while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
// }
