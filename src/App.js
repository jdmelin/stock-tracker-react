import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './containers/AppContainer/AppContainer';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import MyStocks from './containers/MyStocks/MyStocks';
import ProtectedRoute from './containers/ProtectedRoute/ProtectedRoute';
import Register from './containers/Register/Register';
import Stocks from './containers/Stocks/Stocks';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppContainer isLoggedIn={isLoggedIn} />}>
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Stocks />
              </ProtectedRoute>
            }
          />
          {!isLoggedIn && (
            <Route
              path="/login"
              element={<Login onSetIsLoggedIn={setIsLoggedIn} />}
            />
          )}
          <Route
            path="/logout"
            element={<Logout onSetIsLoggedIn={setIsLoggedIn} />}
          />
          {!isLoggedIn && <Route path="/register" element={<Register />} />}
          <Route
            path="/stocks/:userId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Stocks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-stocks/:userId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <MyStocks />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
