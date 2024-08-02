import React, { useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5500/api/auth/register', { username, email, password, role: 'User' });
            alert('Registration successful');
        } catch (err) {
            setError('Server error');
        }
    };

    return (
        <div className='container'>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
            <div>
                    <label>Username</label>
                    <input 
                        type="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
            </form>

            <p>If you already have an account <Link to="/login">click here</Link></p>

            
        </div>
    );
};

export default RegisterPage;
