import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/auth/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `adminToken=${data.token}; path=/; max-age=86400`;
        window.location.href = '/admin';
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
        }
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 1rem;
        }
        .login-card {
          width: 400px;
          max-width: 100%;
          padding: 2rem;
          border-radius: 12px;
          background: white;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          animation: fadeIn 0.6s ease;
        }
        .login-header h1 {
          margin: 0 0 0.5rem;
          font-size: 1.8rem;
          text-align: center;
          color: #333;
        }
        .login-header p {
          text-align: center;
          color: #666;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        .login-form .form-group {
          margin-bottom: 1.2rem;
        }
        .login-form label {
          display: block;
          margin-bottom: 0.4rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: #444;
        }
        .login-form input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          outline: none;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .login-form input:focus {
          border-color: #4a90e2;
          box-shadow: 0 0 6px rgba(74,144,226,0.3);
        }
        .login-button {
          width: 100%;
          padding: 0.85rem;
          margin-top: 0.5rem;
          background: #4a90e2;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }
        .login-button:hover {
          background: #357ab8;
        }
        .login-button:disabled {
          background: #a0c4f1;
          cursor: not-allowed;
        }
        .error-message {
          color: #d9534f;
          background: #fcebea;
          padding: 0.75rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .login-footer {
          margin-top: 1.2rem;
          text-align: center;
          font-size: 0.85rem;
          color: #777;
        }
        /* Responsive */
        @media (max-width: 600px) {
          .login-card {
            padding: 1.5rem;
          }
          .login-header h1 {
            font-size: 1.5rem;
          }
          .login-header p {
            font-size: 0.85rem;
          }
          .login-form input {
            font-size: 0.9rem;
            padding: 0.65rem;
          }
          .login-button {
            font-size: 0.9rem;
            padding: 0.7rem;
          }
        }
        /* Animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Admin Login</h1>
            <p>Sign in to access the admin panel</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            <p>Default credentials: admin / admin123</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
