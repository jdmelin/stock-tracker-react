// require('dotenv').config();

export default {
  fetchStocks() {
    return fetch('/stocks');
  },

  getAveragePrice(stocks) {
    if (!stocks.length) return 0;

    const sum = stocks.reduce((total, stock) => {
      total += stock.price;
      return total;
    }, 0);
    const average = (sum / stocks.length).toFixed(2);

    return average;
  },

  getStockPrice(symbol) {
    const apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

    return fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
    );
  },

  async setStockPrices(stockData) {
    let stocks = [...stockData];

    for (const stock of stocks) {
      let price;
      try {
        const response = await this.getStockPrice(stock.symbol);
        const { c } = await response.json();
        price = c;
      } catch {
        price = 0;
      } finally {
        const stockToUpdate = stocks.find((s) => stock.id === s.id);
        const updatedStock = {
          ...stockToUpdate,
          price,
        };
        const filteredStocks = stocks.filter((s) => stock.id !== s.id);
        stocks = [...filteredStocks, updatedStock];
      }
    }

    return stocks;
  },
};
