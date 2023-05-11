function showTicker(tickerName = "btcinr") {
  console.log("Inside showTicker --------------1");
  console.log(`http://127.0.0.1:3000/api/tickers/:${tickerName}`);
  fetch(`http://127.0.0.1:3000/api/tickers/:${tickerName}`)
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
          <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank">
          <hr/>
          <p class="decoW">WazirX</p>
          </a>
        </div>
        <div class="column">
          <h3>Last Trade Price</h3>
          <hr/>
          <p>${tickerData.last}</p>
        </div>
        <div class="column">
          <h3>Buy/Sell</h3>
          <hr/>
          <p>${tickerData.buy}/${tickerData.sell}</p>
        </div>
        <div class="column">
          <h3>Difference</h3>
          <hr/>
          <p>${percentDiff}</p>
        </div>
        <div class="column">
          <h3>Saving</h3>
          <hr/>
          <p>${saving}</p>
        </div>
    
      `;
    })
    .catch((error) => {
      console.error(error);
    });
}

showTicker();
