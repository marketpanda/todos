import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { auth, providerGoogle } from './Firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
const LOGIN_URL = '/auth';
export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const signInEmail = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
            const response = axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            setSuccess(true);
            console.log(userCredentials);
            localStorage.setItem('email', email);
            console.log('google ', email);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    };
    const viaGoogle = () => {
        signInWithPopup(auth, providerGoogle).then((data) => {
            // localStorage.setItem('email', data.user.email)
            // localStorage.setItem('avatar', data.user.photoURL)
            // localStorage.setItem('username', data.user.displayName)
            setEmail(data.user.email);
            setSuccess(true);
            localStorage.setItem('email', data.user.email);
            localStorage.setItem('avatar', data.user.photoURL);
            localStorage.setItem('userName', data.user.displayName);
            console.log(data);
            console.log('google ', email);
        });
    };
    return (_jsx(_Fragment, { children: success ? (_jsx(_Fragment, { children: "Hi there!" })) : (_jsx(_Fragment, { children: _jsxs("form", { onSubmit: signInEmail, children: [_jsx("h3", { children: "Log In" }), _jsxs("div", { className: 'condensed', children: [_jsx("label", { htmlFor: "username", children: "Username" }), _jsx("input", { id: "username", value: email, type: "text", onChange: (e) => setEmail(e.target.value) })] }), _jsxs("div", { className: 'condensed', children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx("input", { value: password, type: "password", onChange: (e) => setPassword(e.target.value) })] }), _jsx("button", { className: 'minButton', children: "Sign In" }), _jsx("div", { className: 'signInOptions', children: _jsx("button", { className: 'minButton', onClick: viaGoogle, children: "Sign In with Google" }) })] }) })) }));
}
