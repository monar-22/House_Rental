import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    function registerUser(ev) {
        ev.preventDefault();
        alert('Registration successful');
        setRegistrationSuccess(true);
    }

    if (registrationSuccess) {
        return <Navigate to="/" />;
    }

    return (
        <div className="mt-20 mb-40 grow flex items-center justify-around border border-gray-300 rounded-lg p-4 w-96 h-auto mx-auto bg-gray-100">
    <div className="mb-6">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser} id="register">
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={ev => setName(ev.target.value)}
            />
            <input 
                type="email" 
                placeholder="Email"
                value={email} 
                onChange={ev => setEmail(ev.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password} 
                onChange={ev => setPassword(ev.target.value)}
            />
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
                Already a member? Login <Link className="underline text-black" to={'/login'}>Login now</Link>
            </div>
        </form>
    </div>
</div>

    );
}
