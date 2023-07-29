import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Login() {
  let navigator = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState({
    name: '',
    password: ''
  });

  function updatehandling(e) {
    setText({
      ...text,
      [e.target.name]: e.target.value
    });
  }

const handleLogin = (e) => {
  e.preventDefault();

  const { name, password } = text;

  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: name, password: password }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
        navigator('/profile');

         setText({
          name: '',
          password: ''
        });
        
      } else {
        console.error(data.error);
      }
    })
    .catch(error => console.error('Login failed:', error));
};

 
  return (
    <div className="myform">
      <form onSubmit={handleLogin}>
        <p>Welcome back! 👋</p>
        <h1>Sign in to your account</h1>
        <label>Your Name</label>
        <input type="text" name="name" value={text.name} onChange={updatehandling} />
        <label>Password</label>
        <input type="password" name="password" value={text.password} onChange={updatehandling} />
        <button type="submit">CONTINUE</button> 
        <p id="forgot">Forget your password?</p>
      </form>
      <p id="signup">Don’t have an account?<span>Sign up</span></p>
    </div>
  );
}

export default Login;
