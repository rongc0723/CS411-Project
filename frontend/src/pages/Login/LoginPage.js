import logo from './logo.png';
import './LoginPage.css';

function LoginPage() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <br></br>
      <style>{'body { background-color: #F6F6F6; }'}</style>
      <button className="btn">Login With Google</button>
      {/* Add your login form or other content here */}
    </div>
  );
}

export default LoginPage;
