import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './containers/AppContainer/AppContainer';
import Login from './containers/Login/Login';
import MyStocks from './containers/MyStocks/MyStocks';
import Register from './containers/Register/Register';
import Stocks from './containers/Stocks/Stocks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppContainer />}>
          <Route path="/" element={<Stocks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/my-stocks" element={<MyStocks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
