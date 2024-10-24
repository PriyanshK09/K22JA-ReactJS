import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setFormData({
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="form-title">
                    {isLoginView ? 'Login Form' : 'Signup Form'}
                </h2>
                
                <div className="toggle-container">
                    <button 
                        className={`toggle-button ${isLoginView ? 'active' : ''}`}
                        onClick={() => setIsLoginView(true)}
                    >
                        Login
                    </button>
                    <button 
                        className={`toggle-button ${!isLoginView ? 'active' : ''}`}
                        onClick={() => setIsLoginView(false)}
                    >
                        Signup
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" name="email" className="input-field" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required/>
                    </div>
                    
                    <div className="form-group">
                        <input type="password" name="password" className="input-field" placeholder="Password" value={formData.password} onChange={handleInputChange} required/>
                    </div>

                    {!isLoginView && (
                        <div className="form-group">
                            <input type="password" name="confirmPassword" className="input-field" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleInputChange} required/>
                        </div>
                    )}

                    {isLoginView && (
                        <a href="/" className="forgot-password">
                            Forgot password?
                        </a>
                    )}

                    <button type="submit" className="submit-button">
                        {isLoginView ? 'Login' : 'Signup'}
                    </button>

                    {isLoginView && (
                        <div className="signup-prompt">
                            Not a member?{' '}
                            <span className="signup-link" onClick={toggleView}>
                                Signup now
                            </span>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
