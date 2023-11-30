// Based on Video 84 - Event Listeners

//First method for clearing items

const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');

    itemList.innerHTML = '';
}

clearBtn.addEventListener('click', onClear);

// Second Method for clearing items
/*
const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    //itemList.innerHTML = '';
    items.forEach((item) => item.remove());   
}

clearBtn.addEventListener('click', onClear);*/


// Third method for clearing items
/*
const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    //itemList.innerHTML = '';
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    } 
}
clearBtn.addEventListener('click', onClear);*/
