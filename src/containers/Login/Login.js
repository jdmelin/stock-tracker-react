import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container className="mt-5">
      <Row className="login-container">
        <h1>Log In</h1>
        <Form>
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
    </Container>
  );
}

export default Login;
