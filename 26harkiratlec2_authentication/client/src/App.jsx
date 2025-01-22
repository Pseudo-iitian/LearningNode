import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // to stop loading when user do dubmit the form
    try {
      // Make a POST request to your backend
      const response = await axios.post('https://didactic-tribble-5jxpjq447q727wqw-3000.app.github.dev/signin', {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      // alert('Login successful!');
      navigate('/users'); // Redirect to the /users page
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="App">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default App;
