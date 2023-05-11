function showTicker(tickerName) {
  // Make a request to fetch the ticker data based on the clicked button
  console.log("Inside showTicker");
  console.log(`https://api.wazirx.com/api/v2/tickers/${tickerName}`);
  fetch(`https://api.wazirx.com/api/v2/tickers/${tickerName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data from js", data);
      const tickerData = data.ticker; // Extract the ticker data object
      const low = parseFloat(tickerData.low);
      const high = parseFloat(tickerData.high);
      const volume = parseFloat(tickerData.vol);
      const difference = high - low;
      const percentDiff = ((difference / low) * 100).toFixed(2) + "%";
      const saving = (difference * volume).toFixed(2) + " INR";
      const tickerRow = document.getElementById("tickerRow");
      console.log("tickerRow", tickerRow);
      console.log(
        "data.last",
        tickerData.last,
        tickerData.buy,
        tickerData.sell,
        difference,
        volume
      );
      tickerRow.innerHTML = `
      
        <div class="column">
          <h3>Platform Name</h3>
          <p>WazirX</p>
        </div>
        <div class="column">
          <h3>Last Trade Price</h3>
          <p>${tickerData.last}</p>
        </div>
        <div class="column">
          <h3>Buy/Sell</h3>
          <p>${tickerData.buy}/${tickerData.sell}</p>
        </div>
        <div class="column">
          <h3>Difference</h3>
          <p>${percentDiff}</p>
        </div>
        <div class="column">
          <h3>Saving</h3>
          <p>${saving}</p>
        </div>
      `;
    })
    .catch((error) => {
      console.error(error);
    });
}
