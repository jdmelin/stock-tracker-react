import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyStocks from './containers/MyStocks/MyStocks';
import Stocks from './containers/Stocks/Stocks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/my-stocks" element={<MyStocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
