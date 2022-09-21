import { useEffect, useState } from 'react';
import stockService from '../../services/stockService';
import Row from 'react-bootstrap/Row';
import Stock from '../../components/Stock/Stock';
import { Link } from 'react-router-dom';

function MyStocks() {
  const [stocks, setStocks] = useState([]);
  const [stockAverage, setStockAverage] = useState(0);

  useEffect(() => {
    getStocks();
  }, []);

  useEffect(() => {
    const average = stockService.getAveragePrice(stocks);
    setStockAverage(average);
  }, [stocks]);

  const getStocks = async () => {
    try {
      const response = await stockService.fetchMyStocks();
      const stockData = await response.json();
      const stocksWithPrices = await stockService.setStockPrices(stockData);
      setStocks(stocksWithPrices);
    } catch {
      // TODO: handle error
    }
  };

  return (
    <>
      <h1 className="display-4">My Stocks</h1>
      <Link to="/stocks">See All Stocks</Link>
      <hr className="my-4" />
      <h4 className="mb-3">Average Price: ${stockAverage}</h4>
      <Row>
        {stocks.map((stock) => (
          <Stock key={stock.id} stock={stock} />
        ))}
      </Row>
    </>
  );
}

export default MyStocks;
