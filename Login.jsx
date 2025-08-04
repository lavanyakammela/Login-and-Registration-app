import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../utils';

function Login() {
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError('Please Enter Both email and password');
    }

    try {
      const url = 'http://localhost:5000/api/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });

      const data = await response.json();
      const { success, message, jwtToken, name, error } = data;

      if (response.ok && success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/index');
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0] || 'Login Failed';
        handleError(details);
      } else {
        handleError(message || 'Invalid Credentials');
      }
    } catch (err) {
      handleError(err.message || 'Something went wrong');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex justify-content-center align-items-center vh-100 modern-bg">
        <div
          className="modern-glass border-0 shadow p-5 rounded-4 text-white"
          style={{ width: '100%', maxWidth: '420px' }}
        >
          <h2 className="text-center mb-4 fw-bold">Welcome back</h2>
          <form className="login-wrapper" onSubmit={handleLogin}>
            <div className="mb-4 position-relative">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className="form-control form-control-lg bg-transparent text-white border-white"
                placeholder="Enter your Email"
                value={loginInfo.email}
              />
            </div>

            <div className="mb-4 position-relative">
              <label htmlFor="password" className="form-label text-white">Password</label>
              <input
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="form-control form-control-lg bg-transparent text-white border-white"
                placeholder="Enter Password"
                value={loginInfo.password}
              />
              <i
  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
  onClick={togglePasswordVisibility}
  style={{
    position: 'absolute',
    right: '15px',
    top: '52%',
    cursor: 'pointer',
    color: 'white',
    fontSize: '1.2rem'
  }}
></i>

            </div>

            <button type="submit" className="btn btn-light w-100 py-2 fw-semibold">
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-white-50">
              Don't have an account?{' '}
              <Link to="/signup" className="text-white fw-semibold">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;