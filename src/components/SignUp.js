import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './Firebase';
export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [errors, setErrors] = useState([]);
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    useEffect(() => {
        setValidEmail(regexEmail.test(email));
    }, [email]);
    useEffect(() => {
        setValidPassword(password.length >= 6 && regexPassword.test(password));
    }, [password]);
    const signUpUser = (e) => {
        e.preventDefault();
        if (!validEmail) {
            setErrors([...errors, 'Invalid email address']);
        }
        if (!validPassword) {
            setErrors([...errors, 'Password must be at least 6 characters long and contain at least 1 letter and 1 digit']);
        }
        if (password !== confirmPassword) {
            setErrors([...errors, 'Passwords do not match']);
        }
        if (validEmail && validPassword && (password == confirmPassword)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                console.log(userCredential);
                setSuccess(true);
                setErrors([]);
            }).catch((error) => {
                console.log(error);
            });
        }
        console.log('registering...');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };
    const displayErrors = () => {
        if (errors.length == 0)
            return;
        return (_jsx("div", { className: 'errorHandler', children: errors.map((error, i) => (_jsxs("div", { children: [error, _jsx("br", {})] }, error))) }));
    };
    return (_jsx(_Fragment, { children: success ? _jsx("h2", { children: "Registration Successful" }) : (_jsxs(_Fragment, { children: [displayErrors(), _jsxs("form", { onSubmit: signUpUser, children: [_jsx("h3", { children: "Sign Up" }), _jsxs("div", { className: 'condensed', children: [_jsx("label", { htmlFor: "username", children: "Email" }), _jsx("input", { id: "username", value: email, type: "text", onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: 'condensed', children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx("input", { value: password, type: "password", onChange: (e) => setPassword(e.target.value), required: true })] }), _jsxs("div", { className: 'condensed', children: [_jsx("label", { htmlFor: "confirmPassword", children: "Confirm Password" }), _jsx("input", { value: confirmPassword, type: "password", onChange: (e) => setConfirmPassword(e.target.value) })] }), _jsx("button", { className: 'minButton', children: "Sign Up" })] })] })) }));
}
