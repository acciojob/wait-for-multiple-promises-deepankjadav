//your JS code here. If required.
// Get the table body
let output = document.getElementById("output");

// Add the initial loading row
let loadingRow = document.createElement("tr");
loadingRow.id = "loading";
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
output.appendChild(loadingRow);

// Function to create a promise that resolves after a random time
function createPromise(name) {
  let time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: parseFloat(time) });
    }, time * 1000);
  });
}

// Create 3 promises
let promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

let startTime = performance.now();

// Use Promise.all to wait for all promises to resolve
Promise.all(promises).then((results) => {
  let endTime = performance.now();
  let totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Clear the loading row
  output.innerHTML = "";

  // Add a row for each promise
  results.forEach((result, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // Add the total row
  let totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});
