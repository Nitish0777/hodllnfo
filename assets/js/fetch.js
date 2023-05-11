function showTicker(tickerName) {
  // Make a request to fetch the ticker data based on the clicked button
  console.log("Inside showTicker");
  fetch(`/api/tickers/${tickerName}`)
    .then((response) => response.json())
    .then((data) => {
      // Create the ticker row HTML dynamically
      const tickerRow = document.getElementById("tickerRow");
      console.log("tickerRow", tickerRow);
      tickerRow.innerHTML = `
        <div class="column">
          <h3>Platform Name</h3>
          <p>${data.name}</p>
        </div>
        <div class="column">
          <h3>Last Trade Price</h3>
          <p>${data.last}</p>
        </div>
        <div class="column">
          <h3>Buy/Sell</h3>
          <p>Buy: ${data.buy}<br>Sell: ${data.sell}</p>
        </div>
        <div class="column">
          <h3>Difference</h3>
          <p>Low: ${data.low}<br>High: ${data.high}</p>
        </div>
        <div class="column">
          <h3>Saving</h3>
          <p>Volume: ${data.volume}</p>
        </div>
      `;
    })
    .catch((error) => {
      console.error(error);
    });
}
