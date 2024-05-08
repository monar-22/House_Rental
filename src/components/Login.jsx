import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        alert('Login successful');
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-20 mb-40 grow flex items-center justify-around ">
            <div className="mb-65 max-w-md mx-auto border border-gray-300 rounded p-4 bg-gray-100">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form onSubmit={handleLoginSubmit} id="login">
                    
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10 mb-8"
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10 mb-8"
                    />

                    <button className="primary w-full py-2 rounded mb-4">Login</button>

                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}
