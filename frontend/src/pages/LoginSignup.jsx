import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [isLogin, setIsLogin] = useState(false); // Toggle between login and signup
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        const response = await fetch('api/users.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password, referred_by: referralCode })
        });

        const data = await response.json();
        setMessage(data.message);
    };

    const handleLogin = async () => {
        const response = await fetch('api/users.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        setMessage(data.message);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (isLogin) {
            handleLogin(); // Call login function
        } else {
            handleSignup(); // Call signup function
        }
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Referral Code (optional)"
                            value={referralCode}
                            onChange={(e) => setReferralCode(e.target.value)}
                        />
                    )}
                    <button type="submit">{isLogin ? 'Login' : 'Continue'}</button>
                </form>
                <p className="loginsignup-toggle">
                    {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? ' Sign Up' : ' Login here'}
                    </span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {message && <p>{message}</p>} 
            </div>
        </div>
    );
}

export default LoginSignup;