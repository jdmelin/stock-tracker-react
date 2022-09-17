import { useEffect, useState } from 'react';
import stockService from '../../services/stockService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stock from '../../components/Stock/Stock';

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
    <Container className="mt-5">
      <h1 className="display-4">My Stocks</h1>
      <a href="/stocks">See All Stocks</a>
      <hr className="my-4" />
      <h4 className="mb-3">Average Price: ${stockAverage}</h4>
      <Row>
        {stocks.map((stock) => (
          <Stock key={stock.id} stock={stock} />
        ))}
      </Row>
    </Container>
  );
}

export default MyStocks;
