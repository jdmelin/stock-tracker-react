import { useEffect, useState } from 'react';
import stockService from '../../services/stockService';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Stocks() {
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
      const response = await stockService.fetchStocks();
      const stockData = await response.json();
      const stocksWithPrices = await stockService.setStockPrices(stockData);
      setStocks(stocksWithPrices);
    } catch {
      // TODO: handle error
    }
  };

  return (
    <>
      <h1 className="display-4">Stocks</h1>
      <a href="/my-stocks">See Your Stocks</a>
      <hr className="my-4" />
      <h4 className="mb-3">Average Price: ${stockAverage}</h4>
      <Row>
        {stocks.map((stock) => (
          <Col md="6" lg="3" key={stock.id}>
            <Card className="my-2">
              <Card.Body>
                <Card.Title>{stock.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {stock.symbol}
                </Card.Subtitle>
                <Card.Text>${stock.price}</Card.Text>
                <Button
                  variant="primary"
                  className={`${stock.favorite ? 'disabled' : ''}`}
                  data-id={stock.id}
                >
                  Add to favorites!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Stocks;
