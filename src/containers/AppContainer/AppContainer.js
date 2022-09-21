import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function AppContainer() {
  return (
    <>
      <Navbar className="navbar-light bg-light p-2 justify-content-between">
        <Link className="navbar-brand" to="/">
          Stock Tracker
        </Link>
        <Link className="navbar-brand" to="/login">
          Log In
        </Link>
      </Navbar>
      <Container className="mt-5">
        <Outlet />
      </Container>
    </>
  );
}

export default AppContainer;
