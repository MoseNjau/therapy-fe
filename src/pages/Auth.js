// Auth.js
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const Auth = () => (
  <MainLayout>
    <div className="auth-container">
      <LoginForm />
      <RegisterForm />
    </div>
  </MainLayout>
);
export default Auth;