import React, { useEffect } from 'react';
import { useLocation } from 'wouter';

function Login() {
  const [location, setLocation] = useLocation();
  const isUserAuthenticated = () => !!localStorage.getItem('user');

  useEffect(() => {
    if (!isUserAuthenticated()) {
      // Redirects to login page if user is not authenticated
      setLocation('/login');
    }
  }, [location]);

  return (
    <div>
      <h1>Login</h1>
      {/* Your component JSX goes here */}
    </div>
  );
}
export default Login;
