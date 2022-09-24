import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ onSetIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    onSetIsLoggedIn(false);
    navigate('/login');
  }, []);
}

export default Logout;
