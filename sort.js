let iterationCount = 0;
let sortResults = [];

let bubbleSort = (inputArr) => {
    iterationCount = 0;
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        // compares two values and sorts by ascending values
            for (let j = 0; j < len; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    let tmp = inputArr[j];
                    iterationCount++;
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                    swapped = true;
                }
            }
    } while (swapped);
    sortResults.push(iterationCount);
    return inputArr;
};

let sortArray = [];

const renderResults = (inputArray) => {
    const container = document.querySelector('.results');
    const result = document.createElement('div');
    result.classList.add('result');
    const unsorted = document.createElement('h1');
    unsorted.classList.add('array');
    unsorted.innerText = `Przed sortowaniem - [ ${inputArray.join(', ')} ]`;
    const sorted = document.createElement('h1');
    sorted.classList.add('array');
    sorted.innerText = `Po sortowaniu -  [ ${bubbleSort(inputArray).join(', ')} ]`;
    const iterations = document.createElement('h1');
    iterations.innerText = `Liczba iteracji - ${iterationCount}`;
    iterations.classList.add('iterations');
    // Append results to the DOM
    result.appendChild(iterations);
    result.appendChild(unsorted);
    result.appendChild(sorted);
    container.appendChild(result);
};

const createRandomValues = (length) => {
    for (let i = 0; i < length; i++) {
        const number = Math.floor(Math.random() * 100);
        sortArray.push(number);
    }
};

const handleSubmit = () => {
    // Clear previous results
    const container = document.querySelector('.results');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // Generate new results
    const amount = document.getElementById('sortInput').value;
    console.info(amount);
    for(let i = 0; i < amount; i++) {
        sortArray = [];
        createRandomValues(10);
        renderResults(sortArray);
    }
};
