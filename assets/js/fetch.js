function showTicker(tickerName) {
  // Make a request to fetch the ticker data based on the clicked button
  console.log("Inside showTicker");
  console.log(`https://api.wazirx.com/api/v2/tickers/${tickerName}`);
  fetch(`https://api.wazirx.com/api/v2/tickers/${tickerName}`)
    .then((response) => response.json())
    .then((data) => {
      const low = parseFloat(data.low);
      const high = parseFloat(data.high);
      const volume = parseFloat(data.volume);
      const difference = high - low;
      const saving = difference * volume;
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
          <p>Low: ${data.difference}</p>
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
