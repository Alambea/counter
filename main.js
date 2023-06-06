const displayerElement = document.querySelector('#displayer')
const incrementButtonElement = document.querySelector('#increment-button')
const decrementButtonElement = document.querySelector('#decrement-button')
const resetButtonElement = document.querySelector('#reset-button')
const topCounterNumber = 13;
let count = 0;


const setColorStateDisplay = (count) => {
    if (count === topCounterNumber) {
        displayerElement.style.color = 'tomato';
        incrementButtonElement.setAttribute('disabled', true);
    }
    if (count === 0) {
        displayerElement.style.color = 'grey';
        decrementButtonElement.setAttribute('disabled', true);
        resetButtonElement.setAttribute('disabled', true);
        incrementButtonElement.removeAttribute('disabled');   
    }
    if (count === 1 || count === topCounterNumber-1) {
        displayerElement.style.color = 'black';
        if (count === 1) {
            decrementButtonElement.removeAttribute('disabled');
            resetButtonElement.removeAttribute('disabled');
        }
        if (count === topCounterNumber-1) {
            incrementButtonElement.removeAttribute('disabled');   
        } 
    }
}

const updateCounter = (count) => {
    displayerElement.innerHTML = count;
    setColorStateDisplay(count)
}

const incrementCounter = () => {
    count++
    updateCounter(count) 
}

const decrementCounter = () => {
    count--
    updateCounter(count)
}

const resetCounter = () => {
    count = 0;
    updateCounter(count)
}

const runCounter = () => {
    incrementButtonElement.addEventListener('click', incrementCounter, false)
    decrementButtonElement.addEventListener('click', decrementCounter, false)
    resetButtonElement.addEventListener('click', resetCounter, false)
}

runCounter()