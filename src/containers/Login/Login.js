import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import loginService from '../../services/loginService';

function Login({ onSetIsLoggedIn }) {
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();

    const payload = {
      email: 'jsmith@test.com',
      password: 'password123',
    };

    try {
      const response = await loginService.logIn(payload);
      const { message, token } = await response.json();

      if (message === 'success') {
        localStorage.setItem('token', token);
        onSetIsLoggedIn(true);
        navigate('/stocks');
      }
    } catch {
      // handle error
    }
  };
  return (
    <Row className="login-container">
      <h1>Log In</h1>
      <Form onSubmit={submit}>
        <Form.Group className="mt-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" className="mt-3" type="submit">
          Log In
        </Button>
      </Form>
      <Form.Text className="mt-3">
        No account?&nbsp;
        <Link to="/register">Sign up!</Link>
      </Form.Text>
    </Row>
  );
}

export default Login;
