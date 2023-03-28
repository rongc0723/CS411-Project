import logo from './logo.png';
import './LoginPage.css';
import Button from 'react-bootstrap/Button';

function LoginPage() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <br></br>
      <style>{'body { background-color: #F6F6F6; }'}</style>
      <Button variant="outline-primary" size="lg">Login with Google</Button>{' '}
      {/* Add your login form or other content here */}
    </div>
  );
}

export default LoginPage;
