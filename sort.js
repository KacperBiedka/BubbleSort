let iterationCount = 0;
let sortResults = [];

// Prevent unwanted signs

document
  .querySelector("#sortInput")
  .addEventListener("keypress", function(evt) {
    if (
      (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
      evt.which > 57
    ) {
      evt.preventDefault();
    }
  });

let bubbleSort = inputArr => {
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

const renderStats = () => {
  const container = document.querySelector(".stats");
  const max = Math.max(...sortResults);
  const min = Math.min(...sortResults);
  const avg = Math.floor(
    sortResults.reduce((a, b) => a + b, 0) / sortResults.length
  );
  console.info(max, min, avg);
  const maxDisplay = document.createElement("h1");
  maxDisplay.classList.add("stat");
  maxDisplay.innerText = `Maximum - ${max}`;
  const minDisplay = document.createElement("h1");
  minDisplay.classList.add("stat");
  minDisplay.innerText = `Minimum - ${min}`;
  const avgDisplay = document.createElement("h1");
  avgDisplay.classList.add("stat");
  avgDisplay.innerText = `Średnio - ${avg}`;
  container.appendChild(maxDisplay);
  container.appendChild(minDisplay);
  container.appendChild(avgDisplay);
};

const renderResults = inputArray => {
  const container = document.querySelector(".results");
  const result = document.createElement("div");
  result.classList.add("result");
  const unsorted = document.createElement("h1");
  unsorted.classList.add("array");
  unsorted.innerText = `Przed sortowaniem - [ ${inputArray.join(", ")} ]`;
  const sorted = document.createElement("h1");
  sorted.classList.add("array");
  sorted.innerText = `Po sortowaniu -  [ ${bubbleSort(inputArray).join(
    ", "
  )} ]`;
  const iterations = document.createElement("h1");
  iterations.innerText = `Liczba iteracji - ${iterationCount}`;
  iterations.classList.add("iterations");
  // Append results to the DOM
  result.appendChild(iterations);
  result.appendChild(unsorted);
  result.appendChild(sorted);
  container.appendChild(result);
};

const createRandomValues = length => {
  for (let i = 0; i < length; i++) {
    const number = Math.floor(Math.random() * 100);
    sortArray.push(number);
  }
};

const handleSubmit = () => {
  sortResults = [];
  // Clear previous results
  const container = document.querySelector(".results");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const stats = document.querySelector(".stats");
  while (stats.firstChild) {
    stats.removeChild(stats.firstChild);
  }
  container.classList.remove("visible");
  stats.classList.remove("visible");
  // Generate new results
  const amount = document.getElementById("sortInput").value.trim();
  if (amount) {
    console.info(amount);
    for (let i = 0; i < amount; i++) {
      sortArray = [];
      createRandomValues(10);
      renderResults(sortArray);
      console.info(sortResults);
    }
    renderStats();
    stats.classList.add("visible");
    container.classList.add("visible");
  } else {
    document.querySelector("#sortInput").classList.remove("shake");
    setTimeout(() => {
      document.querySelector("#sortInput").classList.add("shake");
    }, 100);
  }
};
