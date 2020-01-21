// • Must use JavaScript to add DOM elements to the page, adjusting their size or location to match data
// • Must retrieve the data from either a JSON file, or an API
// • Must be able to browse or transform (at least) one more dimension to the data2
// • JavaScript code should be in separate file3
// • Must present the data in a clear and graphically pleasing way
// • Must have a README.md that describes the data being used
// • Must NOT use a pre-made charting library – you have to write your own!

// Message on currency when bar is 
// Gets API and formats it into json
fetch("https://api.exchangeratesapi.io/latest")
  .then((response) => response.json())
  .then(data => {
    console.log(data);
    let rates = data.rates;
    let base = data.base;
    let date = data.date;
    for (let rate in rates) {
      console.log(rate);}
    // Loop through API keyword pairs
    for (let [key, value] of Object.entries(rates)) {
      console.log(`${key}: ${value}`);
      
      let chart = document.querySelector(".BarChart-container");
      let height = 70;
      let bar = document.createElement("div");
      bar.classList.add("Bar");
      bar.style.height = height + "%";
      chart.appendChild(bar);




    }
  }); // end .then 


